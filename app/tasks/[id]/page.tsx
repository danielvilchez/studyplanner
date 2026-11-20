
import TaskCard from "@/components/TaskCard";
import { getTaskById } from "@/models/Task";
import { Suspense } from "react";
import { dbConnect } from "@/lib/dbConnect";
import { connection } from 'next/server'

type TaskPageProps  = {
  params: Promise<{ id: string }>;
};

async function TaskDisplay({ params }: TaskPageProps){
    const {id} = await params;
    await dbConnect();
    await connection();
    //replace this with database query
    const task = await getTaskById(id);

    if(!task){
        return(
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl text-primary">Task Not Found</h1>
            </div>
        )
    }

    return(
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl text-primary">{task.title}</h1>
            <TaskCard task={task}/>
        </div>
    )
}


export default function TaskPage({ params }: TaskPageProps){
    
    return (
        <Suspense fallback={<div className="max-w-4xl mx-auto"><p>Plese wait...</p></div>}>
            <TaskDisplay params={params}/>
        </Suspense>
    )
    
}