import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description?: string;
  dueDate?: Date;
  status: 'Pending' | 'Completed';
  userId: string;
}

const TaskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  dueDate: { type: Date, required: false },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  userId: { type: String, required: true },
}, { timestamps: true });

const Task = mongoose.models.Task || mongoose.model<ITask>('Task', TaskSchema);


export default Task;

export async function getAllTasks(){

  return Task.find({});
}

export async function getTaskById(id:number | string){

  return Task.findOne({id:id});
}