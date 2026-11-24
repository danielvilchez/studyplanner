import TaskList from '@/components/TaskList';
import Link from 'next/link';
import { TaskListPlaceholder } from '@/components/TaskList';
import { Suspense } from 'react';


export default function TasksPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-sans font-bold text-3xl text-primary">My Tasks</h2>
        <Link 
          href="/tasks/new" 
          className="bg-secondary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          + Create Task
        </Link>
      </div>
      
      {/* Task list will go here in Issue #7 */}
      <div className="bg-background p-6 rounded-xl">

        <Suspense fallback={<TaskListPlaceholder/>}>
            <TaskList/>
        </Suspense>

      </div>
    </div>
  );
}