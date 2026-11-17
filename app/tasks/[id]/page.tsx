
import TaskCard from "@/components/TaskCard";
import { mockTasks } from "@/lib/mockData";
import { Suspense } from "react";

type TaskPageProps  = {
  params: Promise<{ id: string }>;
};

 async function TaskDisplay({ params }: TaskPageProps){
    const {id} = await params;

    //replace this with database query
    const task = mockTasks[parseInt(id)-1];

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
        <Suspense fallback={<div className="max-w-4xl mx-auto"></div>}>
            <TaskDisplay params={params}/>
        </Suspense>
    )
    
}