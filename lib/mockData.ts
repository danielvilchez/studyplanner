import { Task, taskStatus } from "./types";

export const mockTasks:Task[] = [
  { id: 1, title: 'WDD 430 Project', description: 'Finish the dashboard overview UI.', status: taskStatus.Pending, dueDate: '2026-11-20' },
  { id: 2, title: 'CSE 340 Assignment', description: 'Database normalization exercise.', status: taskStatus.Pending, dueDate: '2026-11-25' },
  { id: 3, title: 'Read Chapter 4', description: 'Read the React documentation.', status: taskStatus.Completed , dueDate: '2026-11-25'},
  { id: 4, title: 'Group Meeting', description: 'Sync with the StudyPlanner team.', status: taskStatus.Completed},
];