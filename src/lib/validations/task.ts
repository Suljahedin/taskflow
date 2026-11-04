import { z } from "zod";

const prioritySchema = z.enum(["LOW", "MEDIUM", "HIGH"]);

const statusSchema = z.enum(["TODO", "IN_PROGRESS", "COMPLETED"]);

const dueDateSchema = z
  .string()
  .refine((value) => !Number.isNaN(Date.parse(value)), {
    message: "Invalid date.",
  })
  .transform((value) => new Date(value))
  .nullable()
  .optional();

export const createTaskSchema = z.object({
  title: z.string().trim().min(1).max(120),
  description: z.string().trim().max(1000).nullable().optional(),
  dueDate: dueDateSchema,
  priority: prioritySchema.optional(),
  status: statusSchema.optional(),
  categoryId: z.number().int().positive().nullable().optional(),
});

export const updateTaskSchema = createTaskSchema
  .partial()
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided.",
  });

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
