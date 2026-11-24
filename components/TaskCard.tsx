"use client"
import Link from "next/link";
import { deleteTask } from "@/lib/actions";

type TaskCardProps = {
    _id: string,
    title: string,
    description: string,
    dueDate: string,
    status: string,
    userId: string,
}

export default function TaskCard(task: TaskCardProps){
    return (
    <div className="my-1 w-full h-full rounded-lg bg-white border-secondary/50 border-1 border-t-20 border-t-secondary flex justify-between">
        
        <section className="basis-xl p-5 flex flex-col gap-2">
            <p>{task.description}</p>
            <h2 className="font-semibold text-2xl">Status:</h2>
            <section className="flex gap-2 bg-secondary/10 p-2 rounded flex flex-col">
                <span className="block">{task.status == "Completed" ? <strong className="text-success">Completed</strong> : <strong className="text-red-500">Pending </strong>}</span>
                <p>Due: {task.dueDate ? task.dueDate.toLocaleString() : "No due date"}</p>
            </section>
        </section>
        <aside className="bg-primary/10 border-l-primary/50 border-l-2 p-5 flex flex-col">
            <Link href={`/tasks/${task._id}/edit`} className="bg-operation text-white py-2 px-4 rounded hover:bg-operation/80">
                Edit Task
            </Link>
            <form action={deleteTask.bind(null, task._id)} className="mt-2 bg" >
                <button type="submit" className="bg-danger text-white py-2 px-4 rounded hover:bg-danger/80">
                    Delete Task
                </button>
            </form>
        </aside>
    </div>
    )
}