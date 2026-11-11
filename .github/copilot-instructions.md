
# StudyPlanner - GitHub Copilot Instructions

## Project Overview

StudyPlanner is a web application designed to help university students organize their academic tasks, assignments, projects, and deadlines in one place.

## Technology Stack

- Next.js 16 with App Router.
- React 19.
- TypeScript.
- Tailwind CSS 4.
- ESLint for code quality.
- Prettier for code formatting.
- MongoDB for database storage.
- Clerk for authentication.

## Application Architecture

- Use the Next.js App Router.
- Keep pages and components organized and reusable.
- Use Server Components by default.
- Use Client Components only when interactivity, state, or browser APIs are needed.
- Keep components focused on a single responsibility.

### Main Routes

- `/` - Home page.
- `/sign-up` - User registration.
- `/sign-in` - User login.
- `/dashboard` - Overview of academic tasks.
- `/tasks` - List of all academic tasks.
- `/tasks/[id]` - View or edit a specific task.

## Reusable Components

Use reusable components whenever possible:

- `Header` - Top navigation.
- `Sidebar` - Side navigation.
- `Footer` - Page footer.
- `TaskCard` - Displays an individual task.
- `TaskDisplay` - Displays a list of tasks.
- `TaskForm` - Creates and edits tasks.
- `DashboardSummary` - Displays pending and completed task counts.
- `DeadlineDisplay` - Shows upcoming deadlines.
- `CompletedTaskDisplay` - Displays completed tasks.
- `EmptyStateComponent` - Displays a message when there are no tasks.
- `LoadingSkeleton` - Displays loading placeholders.

## Database and Data Model

Use MongoDB for persistent application data.

### User

- `clerkId` - Unique identifier provided by Clerk.
- `name` - User's name.
- `email` - User's email address.

### Task

- `id` - Unique task identifier.
- `title` - Required task title.
- `description` - Optional task description.
- `dueDate` - Optional task deadline.
- `status` - Pending or Completed.
- `userId` - Identifier of the task owner.

### Relationships

- One user can have multiple tasks.
- Each task belongs to one user.
- Use the authenticated Clerk user ID to associate tasks with their owners.
- Users must only access and modify their own tasks.

## Authentication and Security

- Use Clerk to manage user registration, login, and authentication.
- Do not store passwords in MongoDB.
- Protect authenticated routes and task operations.
- Validate user ownership before reading, updating, or deleting tasks.
- Never expose secret keys or credentials in source code.
- Use environment variables for sensitive configuration.

## Coding Standards

- Use TypeScript for application code.
- Avoid using `any`; define clear types and interfaces.
- Use PascalCase for React components and interfaces.
- Use camelCase for variables and functions.
- Use descriptive file and variable names.
- Prefer reusable components instead of duplicated code.
- Follow the existing project structure and conventions.

## Styling and Responsive Design

- Use Tailwind CSS utility classes for styling.
- Follow a clean and simple interface.
- Keep spacing, alignment, and typography consistent.
- Make the application responsive on desktop, tablet, and mobile devices.
- Use the project's agreed design decisions when implementing new UI elements.

## Development Workflow

- Create a separate branch for each feature or fix.
- Make small and focused commits.
- Run ESLint and Prettier before submitting changes.
- Verify that changes work locally.
- Submit changes through a pull request.
- Request a team review before merging into `main`.
- Follow existing project conventions when modifying code.
