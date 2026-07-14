# Todo List App

A simple, lightweight Todo List built with React. Add tasks, mark them as done, and delete them — all backed by clean, minimal component state.

## Features

- **Add tasks** — Type a task and add it to your list.
- **Mark as done** — Toggle a task's completion status; completed tasks are shown with a strikethrough.
- **Delete tasks** — Remove any task from the list.
- **Unique IDs** — Each task gets a unique ID via `uuid`, so updates and deletes always target the correct item.

## Tech Stack

- [React](https://react.dev/) (functional components + hooks)
- [uuid](https://www.npmjs.com/package/uuid) for generating unique task IDs

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm or yarn

### Installation

1. Clone the repository or copy the component into your project.
2. Install dependencies:

   ```bash
   npm install uuid
   ```

3. Import and render the component in your app:

   ```jsx
   import TodoList from './TodoList';

   function App() {
     return <TodoList />;
   }

   export default App;
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## How It Works

- `todos` — An array of task objects (`{ Task, id, isDone }`) held in state.
- `newTodo` — Tracks the current value of the input field.
- `addnewTodo()` — Appends a new task object to `todos` and clears the input.
- `updatenewTodo()` — Updates `newTodo` as the user types.
- `deleteTodo(id)` — Filters out the task matching the given `id`.
- `isDone(id)` — Toggles the `isDone` flag for the matching task, which controls the strikethrough style.

## Project Structure

```
TodoList.jsx   # Main component containing all todo logic and UI
```

## Possible Improvements

- Persist todos to `localStorage` so tasks survive page refreshes.
- Add input validation (e.g., prevent adding empty tasks).
- Add editing support for existing tasks.
- Extract list items into a separate `TodoItem` component for readability.
- Add styling (CSS modules, Tailwind, etc.) beyond inline styles.

## License

This project is open source and available for personal or educational use.
