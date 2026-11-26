import { Suspense } from 'react';
import { connection } from 'next/server';
import { dbConnect } from '@/lib/dbConnect';
import Task from '@/models/Task';
import DashboardSummary from '@/components/DashboardSummary';
import DeadlineDisplay from '@/components/DeadlineDisplay';

<<<<<<< Updated upstream
// 1. Move all the logic into an async component
async function DashboardContent() {
  await connection();
  await dbConnect();
  const tasks = await Task.find({}).lean();

  const pendingCount = tasks.filter((t: any) => t.status === 'Pending').length;
  const completedCount = tasks.filter((t: any) => t.status === 'Completed').length;
  
  const upcomingTasks = tasks
    .filter((t: any) => t.status === 'Pending' && t.dueDate)
    .sort((a: any, b: any) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());

=======
// Define the Task interface to avoid using 'any'
interface TaskLean {
  _id: string;
  title: string;
  description?: string;
  status: 'Pending' | 'Completed';
  dueDate?: string | null; 
}

async function DashboardContent() {
  await connection();
  await dbConnect();
  const tasks = (await Task.find({}).lean()) as unknown as TaskLean[];

  const pendingCount = tasks.filter((t) => t.status === 'Pending').length;
  const completedCount = tasks.filter((t) => t.status === 'Completed').length;
  
  const upcomingTasks = tasks
    .filter((t) => t.status === 'Pending' && t.dueDate)
    .sort((a, b) => new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime());

>>>>>>> Stashed changes
  const recentTasks = tasks.slice(0, 3);

  return (
    <div className="space-y-8">
      <DashboardSummary 
        pending={pendingCount} 
        completed={completedCount} 
        upcoming={upcomingTasks.length} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-bold text-xl text-[#4E4187] mb-4 border-b pb-2">Upcoming Deadlines</h3>
          <DeadlineDisplay tasks={upcomingTasks} />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-bold text-xl text-[#4E4187] mb-4 border-b pb-2">Recent Tasks</h3>
          <ul className="space-y-4">
<<<<<<< Updated upstream
            {recentTasks.map((task: any) => (
=======
            {recentTasks.map((task) => (
>>>>>>> Stashed changes
              <li key={task._id.toString()} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                <div>
                  <h4 className="font-semibold text-gray-900">{task.title}</h4>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    task.status === 'Completed' ? 'bg-[#7DDE92]/20 text-[#2E8B57]' : 'bg-[#3083DC]/20 text-[#3083DC]'
                  }`}>
                    {task.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

<<<<<<< Updated upstream
// 2. The main page component just renders the header and the Suspense boundary
=======
>>>>>>> Stashed changes
export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h2 className="font-sans font-bold text-3xl text-[#4E4187]">Dashboard</h2>
        <p className="text-gray-800 mt-2">Welcome back! Here is an overview of your academic workload.</p>
      </div>

      <Suspense fallback={<div className="animate-pulse h-40 bg-gray-200 rounded-xl"></div>}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}