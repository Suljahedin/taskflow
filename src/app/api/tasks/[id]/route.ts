import { NextRequest, NextResponse } from "next/server";
import {
  getTaskById,
  updateTask,
  deleteTask,
  InvalidCategoryError,
} from "@/lib/tasks";
import { updateTaskSchema } from "@/lib/validations/task";

const TEMP_USER_ID = 1;

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

function getValidId(id: string): number | null {
  const parsedId = Number(id);

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    return null;
  }

  return parsedId;
}

// GET SINGLE TASK
export async function GET(_request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const taskId = getValidId(id);

    if (!taskId) {
      return NextResponse.json(
        { success: false, message: "Invalid task ID." },
        { status: 400 },
      );
    }

    const task = await getTaskById(taskId, TEMP_USER_ID);

    if (!task) {
      return NextResponse.json(
        { success: false, message: "Task not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: task,
    });
  } catch (error) {
    console.error("GET /api/tasks/[id]:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch task." },
      { status: 500 },
    );
  }
}

// UPDATE TASK
export async function PATCH(request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const taskId = getValidId(id);

    if (!taskId) {
      return NextResponse.json(
        { success: false, message: "Invalid task ID." },
        { status: 400 },
      );
    }

    const body: unknown = await request.json();
    const validation = updateTaskSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid task data.",
          errors: validation.error.flatten(),
        },
        { status: 400 },
      );
    }

    const task = await updateTask(taskId, TEMP_USER_ID, validation.data);

    if (!task) {
      return NextResponse.json(
        { success: false, message: "Task not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      data: task,
    });
  } catch (error) {
    if (error instanceof InvalidCategoryError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 },
      );
    }

    console.error("PATCH /api/tasks/[id]:", error);

    return NextResponse.json(
      { success: false, message: "Failed to update task." },
      { status: 500 },
    );
  }
}

// DELETE TASK
export async function DELETE(_request: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const taskId = getValidId(id);

    if (!taskId) {
      return NextResponse.json(
        { success: false, message: "Invalid task ID." },
        { status: 400 },
      );
    }

    const deleted = await deleteTask(taskId, TEMP_USER_ID);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Task not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Task deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE /api/tasks/[id]:", error);

    return NextResponse.json(
      { success: false, message: "Failed to delete task." },
      { status: 500 },
    );
  }
}
