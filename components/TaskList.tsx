import Link from "next/link";
import { dbConnect } from "@/lib/dbConnect";
import { getAllTasks } from "@/models/Task";
import type { ITask } from "@/lib/typesAndInterfaces";
import { connection } from 'next/server'


function TaskListCard({task}: {task: ITask}){
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
                        {task.status == "Completed" ? 
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

                <Link href={`/tasks/${task._id}`} className="bg-accent p-2 rounded-md text-white hover:bg-secondary h-full">View Task</Link>   
            </div>
        </div>
    )
}


export function TaskListPlaceholder(){
  return (
    <div className="bg-background border-primary/50 border-1 p-4 rounded-lg min-h-50">
            <ul className="flex flex-col grow justify-stretch h-full mt-10">
                <li>
                    <h1 className="text-primary text-4xl text-center">Nothing to see here...</h1>    
                </li>
            
            </ul>
            
        </div>
  );
}



export default async function TaskList(){
    await connection();
    await dbConnect();

    const tasks = await getAllTasks();

    if(tasks.length > 0){
        return (
            <div className="bg-background border-primary/50 border-1 p-4 rounded-lg ">
                <ul className="flex flex-col grow">
                    {tasks.map((task:ITask, index)=>{
                        return <li key={index} >
                                <TaskListCard task={task}/>
                            </li>
                    })}
                </ul>
            </div>
        )
    } else{
        return (<TaskListPlaceholder/>)
    }
}