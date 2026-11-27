import Link from 'next/link';

export default function TasksPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-sans font-bold text-3xl text-[#4E4187]">My Tasks</h2>
        <Link 
          href="/tasks/new" 
          className="bg-[#3083DC] hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          + Create Task
        </Link>
      </div>
      
      {/* Task list will go here in Issue #7 */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <p className="text-gray-800">Task list coming in Issue #7...</p>
      </div>
    </div>
  );
}