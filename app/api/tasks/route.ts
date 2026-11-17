import { NextResponse } from 'next/server';

// Temporary in-memory array for now (replaces MongoDB for testing)
let temporaryTaskStore: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate
    if (!body.title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const newTask = {
      id: Date.now(), // Fake ID
      ...body,
      userId: "temp-user-id" // Will be replaced with Clerk ID
    };

    temporaryTaskStore.push(newTask);

    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(temporaryTaskStore);
}