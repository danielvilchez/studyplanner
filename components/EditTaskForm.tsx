import {editTask} from '@/lib/actions';
import {Task} from '@/lib/types';

export default function EditTaskForm({task}:{task: Task}){
    return (<form action={editTask} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-[#4E4187] mb-6">Edit Task</h2>


      <div className="space-y-4">
        {/* Title (Required) */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            defaultValue={task.title}
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-[#3083DC] focus:outline-none"
            placeholder="e.g., Read Chapter 4"
            />
        </div>

        {/* Description (Optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Description
          </label>
          <textarea
            defaultValue={task.description}
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-[#3083DC] focus:outline-none"
            rows={3}
            placeholder="Add some details..."
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
                Status
            </label>
            <select
                defaultValue={task.status ? "completed" : "pending"}
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-[#3083DC] focus:outline-none"
            >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
        </div>

        {/* Due Date (Optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Due Date
          </label>
          <input
            type="date"
            defaultValue={task.dueDate ? task.dueDate.toISOString().split('T')[0] : ''}
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-[#3083DC] focus:outline-none"
            />
        </div>

        {/* Submit Button (Purple) */}
        <button
          type="submit"
          className="w-full bg-[#4E4187] hover:bg-[#3b3170] text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
        >
          Submit
        </button>
      </div>
    </form>)
}