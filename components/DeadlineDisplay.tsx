interface Task {
  _id: string;
  title: string;
  description?: string;
  dueDate?: string | null; 
}

export default function DeadlineDisplay({ tasks }: { tasks: Task[] }) {
  if (tasks.length === 0) {
    return <p className="text-gray-800">You have no upcoming deadlines. Great job!</p>;
  }

  return (
    <ul className="space-y-4">
      {tasks.map(task => (
        <li key={task._id} className="flex justify-between items-center bg-[#F8FFE5] p-4 rounded-lg border border-gray-100">
          <div>
            <h4 className="font-bold text-gray-900">{task.title}</h4>
            <p className="text-sm text-gray-800">{task.description}</p>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold text-[#4E4187]">
              Due: {new Date(task.dueDate!).toLocaleDateString()}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}