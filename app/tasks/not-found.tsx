import Link from "next/link";

export default function TaskNotFound(){
    return(
        <main className="max-w-4xl mx-auto">
            <h1 className="font-sans font-bold text-3xl text-primary">Task Not Found</h1>
            <Link href="/tasks" className="bg-primary p-2 rounded-md text-white hover:bg-white hover:text-primary">Back to Tasks?</Link>
        </main>
    )
}