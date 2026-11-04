import prisma from "@/lib/prisma";

interface CreateTaskInput {
  title: string;
  description?: string | null;
  dueDate?: Date | null;
  priority?: string;
  status?: string;
  categoryId?: number | null;
}

interface UpdateTaskInput {
  title?: string;
  description?: string | null;
  dueDate?: Date | null;
  priority?: string;
  status?: string;
  categoryId?: number | null;
}

export class InvalidCategoryError extends Error {
  constructor() {
    super("Category does not exist or does not belong to this user.");
    this.name = "InvalidCategoryError";
  }
}

async function validateCategoryOwnership(
  categoryId: number | null | undefined,
  userId: number,
) {
  if (categoryId == null) return;

  const category = await prisma.category.findFirst({
    where: {
      id: categoryId,
      userId,
    },
    select: {
      id: true,
    },
  });

  if (!category) {
    throw new InvalidCategoryError();
  }
}

// CREATE
export async function createTask(userId: number, data: CreateTaskInput) {
  await validateCategoryOwnership(data.categoryId, userId);

  return prisma.task.create({
    data: {
      title: data.title,
      description: data.description,
      dueDate: data.dueDate,
      priority: data.priority ?? "MEDIUM",
      status: data.status ?? "TODO",
      userId,
      categoryId: data.categoryId,
    },
  });
}

// READ ALL
export async function getTasks(userId: number) {
  return prisma.task.findMany({
    where: { userId },
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
}

// READ SINGLE
export async function getTaskById(taskId: number, userId: number) {
  return prisma.task.findFirst({
    where: {
      id: taskId,
      userId,
    },
    include: { category: true },
  });
}

// UPDATE
export async function updateTask(
  taskId: number,
  userId: number,
  data: UpdateTaskInput,
) {
  const existingTask = await prisma.task.findFirst({
    where: {
      id: taskId,
      userId,
    },
  });

  if (!existingTask) return null;

  await validateCategoryOwnership(data.categoryId, userId);

  return prisma.task.update({
    where: { id: taskId },
    data,
  });
}

// DELETE
export async function deleteTask(taskId: number, userId: number) {
  const result = await prisma.task.deleteMany({
    where: {
      id: taskId,
      userId,
    },
  });

  return result.count > 0;
}
