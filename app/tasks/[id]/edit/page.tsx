import EditTaskForm from '@/components/EditTaskForm';
import { getTaskById } from '@/models/Task';
import { connection } from 'next/server'

type TaskPageProps  = {
  params: Promise<{ id: string }>;
};

import { Suspense } from 'react';

async function EditTaskDisplay({ params }: TaskPageProps){
    const {id} = await params;
    
    await connection();
    
    const task = await getTaskById(id);

    if(!task){
        return(
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl text-primary">Task Not Found</h1>
            </div>
        )
    }

    const taskForClient = {
    _id: task._id.toString(),
    title: task.title,
    description: task.description ?? '',
    dueDate: task.dueDate ? task.dueDate.toISOString().slice(0, 10) : '',
    status: task.status,
    userId: task.userId,
    };

    return(
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl text-primary">Edit Task: {taskForClient.title}</h1>
            <EditTaskForm {...taskForClient}/>
        </div>
    )
}


export default async function EditTaskPage({ params }: TaskPageProps){
    return (
        <Suspense fallback={<div className="max-w-4xl mx-auto"><h1 className="text-4xl text-primary">Loading...</h1></div>}>
            <EditTaskDisplay params={params} />
        </Suspense>
    )
}