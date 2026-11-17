import { Task } from "@/lib/types";


export default function TaskList({tasks}:{tasks: Task[]}){


    if(tasks.length > 0){
        return (
            <div className="bg-background border-primary/50 border-1 p-4 rounded-lg ">
                <ul className="flex flex-col grow">
                    {tasks.map((task:Task)=>{
                        return <li key={task.id} className="my-1 bg-secondary/10 p-1 rounded-sm flex justify-stretch">
                                <strong className="text-secondary">
                                    {task.title}{" "}
                                </strong>
                                <p className="flex-grow text-center">
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
                                        {task.dueDate ? `Due: ${task.dueDate} ` : " "}
                                    </div>
                                    }   
                                </div>
                                
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