export default function DashboardSummary({ pending, completed, upcoming }: { pending: number, completed: number, upcoming: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 border-l-4 border-l-[#3083DC]">
        <h3 className="text-gray-600 font-medium text-sm uppercase tracking-wide">Pending Tasks</h3>
        <p className="text-4xl font-bold text-[#3083DC] mt-2">{pending}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 border-l-4 border-l-[#7DDE92]">
        <h3 className="text-gray-600 font-medium text-sm uppercase tracking-wide">Completed Tasks</h3>
        <p className="text-4xl font-bold text-[#7DDE92] mt-2">{completed}</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 border-l-4 border-l-[#EF4444]">
        <h3 className="text-gray-600 font-medium text-sm uppercase tracking-wide">Upcoming Deadlines</h3>
        <p className="text-4xl font-bold text-[#EF4444] mt-2">{upcoming}</p>
      </div>
    </div>
  );
}