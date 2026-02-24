import { useState, useEffect } from 'react';
import './App.css';
import type { Todo } from './types';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';
import { FilterBar } from './components/FilterBar';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date().toISOString(), // Use ISO string for local dates
      uid: 'local-user'
    };
    setTodos([newTodo, ...todos]);
  };

  const handleToggleTodo = (id: string, completed: boolean) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed } : todo
    ));
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="app-container">
      <header>
        <div>
          <h1 className="title-gradient">Tasks</h1>
        </div>

        <TodoInput onAdd={handleAddTodo} />
        <FilterBar filter={filter} setFilter={setFilter} />
      </header>

      <main>
        {filteredTodos.length > 0 ? (
          <div className="todo-list">
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <svg className="empty-state-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h3>All caught up!</h3>
            <p>No {filter !== 'all' ? filter : ''} tasks found.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
