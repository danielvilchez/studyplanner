"use client"
import {editTask} from '@/lib/actions';



type EditTaskFormProps = {
    _id: string,
    title: string,
    description: string,
    dueDate: string,
    status: string,
    userId: string,
}

export default function EditTaskForm(task:EditTaskFormProps){
    console.log(task);
    return (
    <form action={editTask} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-[#4E4187] mb-6">Edit Task</h2>

      <input
      type="hidden"
      value={task._id}
      name="id"
      id="id"
      ></input>

      <input
      type="hidden"
      value={task.userId}
      name="user_id"
      id="user_id"
      ></input>
      
      <div className="space-y-4">
        {/* Title (Required) */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-800 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={task.title}
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-[#3083DC] focus:outline-none"
            placeholder="e.g., Read Chapter 4"
            />
        </div>

        {/* Description (Optional) */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-800 mb-1">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            defaultValue={task.description}
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-[#3083DC] focus:outline-none"
            rows={3}
            placeholder="Add some details..."
            />
        </div>

        <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-800 mb-1">
                Status
            </label>
            <select
                defaultValue={task.status == 'Completed' ? 'Completed' : 'Pending'}
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-[#3083DC] focus:outline-none"
                name="status"
                id="status"
              >
                <option value='Pending'>Pending</option>
                <option value='Completed'>Completed</option>
            </select>
        </div>

        {/* Due Date (Optional) */}
        <div>
          <label htmlFor="due_date" className="block text-sm font-medium text-gray-800 mb-1">
            Due Date
          </label>
          <input
            type="date"
            value={task.dueDate}
            defaultValue={task.dueDate}
            name="due_date"
            id="due_date"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-[#3083DC] focus:outline-none"
            />
        </div>

        {/* Submit Button (Purple) */}
        <button
          type="submit"
          name="submit"
          id="submit"
          
          className="w-full bg-[#4E4187] hover:bg-[#3b3170] text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
        >
          Submit
        </button>
      </div>
    </form>)
}