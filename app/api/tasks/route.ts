import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import Task from '@/models/Task';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    if (!body.title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const newTask = await Task.create({
      title: body.title,
      description: body.description,
      dueDate: body.dueDate ? new Date(body.dueDate) : undefined,
      status: 'Pending',
      userId: 'temp-user-id' 
    });

    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    console.error("EXACT DB ERROR:", error); 
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const tasks = await Task.find({});
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("EXACT DB ERROR:", error);
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}