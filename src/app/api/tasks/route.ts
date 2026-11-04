import { NextRequest, NextResponse } from "next/server";
import { createTask, getTasks, InvalidCategoryError } from "@/lib/tasks";
import { createTaskSchema } from "@/lib/validations/task";

const TEMP_USER_ID = 1;

// GET ALL TASKS
export async function GET() {
  try {
    const tasks = await getTasks(TEMP_USER_ID);

    return NextResponse.json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    console.error("GET /api/tasks:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch tasks." },
      { status: 500 },
    );
  }
}

// CREATE TASK
export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const validation = createTaskSchema.safeParse(body);

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

    const task = await createTask(TEMP_USER_ID, {
      ...validation.data,
      priority: validation.data.priority ?? "MEDIUM",
      status: validation.data.status ?? "TODO",
    });

    return NextResponse.json(
      {
        success: true,
        data: task,
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof InvalidCategoryError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 },
      );
    }

    console.error("POST /api/tasks:", error);

    return NextResponse.json(
      { success: false, message: "Failed to create task." },
      { status: 500 },
    );
  }
}
