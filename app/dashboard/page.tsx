import { mockTasks } from '@/lib/mockData';
import DashboardSummary from '@/components/DashboardSummary';
import DeadlineDisplay from '@/components/DeadlineDisplay';

export default function DashboardPage() {
  // 1. Calculate Stats
  const pendingCount = mockTasks.filter(t => t.status === 'Pending').length;
  const completedCount = mockTasks.filter(t => t.status === 'Completed').length;
  
  // 2. Get upcoming deadlines (Pending + has dueDate, sorted closest to farthest)
  const upcomingTasks = mockTasks
    .filter(t => t.status === 'Pending' && t.dueDate)
    .sort((a, b) => new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime());

  // 3. Get recent tasks (Just take the first 3 from the mock data for now)
  const recentTasks = mockTasks.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* Header */}
      <div>
        <h2 className="font-sans font-bold text-3xl text-primary">Dashboard</h2>
        <p className="text-gray-800 mt-2">Welcome back! Here is an overview of your academic workload.</p>
      </div>

      {/* 1. Summary Cards Component */}
      <DashboardSummary 
        pending={pendingCount} 
        completed={completedCount} 
        upcoming={upcomingTasks.length} 
      />

      {/* Grid for Deadlines and Recent Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 2. Upcoming Deadlines Component */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-bold text-xl text-primary mb-4 border-b pb-2">Upcoming Deadlines</h3>
          <DeadlineDisplay tasks={upcomingTasks} />
        </div>

        {/* 3. Recent Tasks List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-bold text-xl text-primary mb-4 border-b pb-2">Recent Tasks</h3>
          <ul className="space-y-4">
            {recentTasks.map(task => (
              <li key={task.id} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
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