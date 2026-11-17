import { Task } from "@/lib/types";
import Link from "next/link";



function TaskListCard({task}: {task: Task}){
//Define list card to display task
    return(
        <div className="my-1 bg-secondary/10 p-1 rounded-sm">
            <h3 className="text-secondary font-semibold text-xl">
                    {task.title}{" "}
            </h3>
            
            <div className="flex justify-between p-1">
                <section>
                    <p>
                        {task.description}
                    </p>
                    <div>
                        {task.status ? 
                        <div>
                            <strong className="text-success">Completed</strong>
                        </div>
                            : 
                        <div>
                            <strong className="text-red-500">Pending: </strong>
                            {task.dueDate ? `Due: ${task.dueDate.toLocaleString()} ` : " "}
                        </div>
                        }   
                    </div>
                </section>

                <Link href={`/tasks/${task.id}`} className="bg-accent p-2 rounded-md text-white hover:bg-secondary h-full">View Task</Link>   
            </div>
        </div>
    )
}





export default function TaskList({tasks}:{tasks: Task[]}){


    if(tasks.length > 0){
        return (
            <div className="bg-background border-primary/50 border-1 p-4 rounded-lg ">
                <ul className="flex flex-col grow">
                    {tasks.map((task:Task)=>{
                        return <li key={task.id} >
                                <TaskListCard task={task}/>
                            </li>
                    })}
                </ul>
            </div>
        )
    } else{
        return (
        <div className="bg-background border-primary/50 border-1 p-4 rounded-lg min-h-50">
            <ul className="flex flex-col grow justify-stretch h-full mt-10">
                <li>
                    <h1 className="text-primary text-4xl text-center">Nothing to see here...</h1>    
                </li>
            
            </ul>
            
        </div>
    )
    }
}