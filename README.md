# Todo App

A clean and intuitive todo list application built with React and Vite. Manage your daily tasks with persistent local storage and an organized tab-based interface.

## Features

- ✅ Add, complete, and delete todos
- 🔖 Filter todos by status (All, Open, Completed)
- 💾 Persistent storage using localStorage
- 🎨 Modern, responsive UI
- ⚡ Fast and lightweight

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Local Storage** - Data persistence

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd todo-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # App header with task statistics
│   │   ├── Tabs.jsx        # Tab navigation for filtering
│   │   ├── TodoInput.jsx   # Input field for new todos
│   │   ├── TodoList.jsx    # List of todo items
│   │   └── TodoCard.jsx    # Individual todo item
│   ├── App.jsx             # Main app component
│   └── main.jsx            # App entry point
├── public/                 # Static assets
└── index.html             # HTML template
```

## Usage

1. **Add a Todo**: Type your task in the input field and press Enter or click the add button
2. **Complete a Todo**: Click the complete button on any todo item
3. **Delete a Todo**: Click the delete button to remove a todo
4. **Filter Todos**: Use the tabs to view All, Open, or Completed tasks

## Data Persistence

All todos are automatically saved to your browser's localStorage, so your tasks persist across sessions.

## License

MIT
