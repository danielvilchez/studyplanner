import mongoose, { Schema} from 'mongoose';

import { ITask } from '@/lib/typesAndInterfaces';

const TaskSchema = new Schema<ITask>({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, trim: true, maxLength: 300 },
  dueDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['Pending', 'Completed'],
    default: 'Pending',
  },
  userId: { type: String, required: true },
}, { timestamps: true });

const Task = mongoose.models.Task || mongoose.model<ITask>('Task', TaskSchema);

export default Task;

export async function getAllTasks(): Promise<ITask[]> {
  return Task.find({});
}

export async function getTaskById(id: string): Promise<ITask | null> {
  return Task.findById(id);
}