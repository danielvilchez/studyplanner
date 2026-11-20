'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateTaskForm() {
    const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate required fields (title is required per spec)
    if (!title.trim()) {
      setError('Task title is required.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to our API route
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          dueDate: dueDate || null,
          status: 'Pending', // Default status
        }),
      });

      if (!res.ok) throw new Error('Failed to create task');

      // Clear form and redirect to dashboard or tasks list
      setTitle('');
      setDescription('');
      setDueDate('');
      router.push('/tasks'); 
      router.refresh(); // Refresh server components
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-[#4E4187] mb-6">Create New Task</h2>

      {/* Error Feedback */}
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm font-medium">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {/* Title (Required) */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-[#3083DC] focus:outline-none"
            rows={3}
            placeholder="Add some details..."
            />
        </div>

        {/* Due Date (Optional) */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">
            Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 bg-white focus:ring-2 focus:ring-[#3083DC] focus:outline-none"
            />
        </div>

        {/* Submit Button (Purple) */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#4E4187] hover:bg-[#3b3170] text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Creating...' : 'Create Task'}
        </button>
      </div>
    </form>
  );
}