import {Types, Document } from 'mongoose';
export interface ITask extends Document {
  _id: Types.ObjectId;
  title: string;
  description?: string;
  dueDate?: Date;
  status: 'Pending' | 'Completed';
  userId: string;
}
