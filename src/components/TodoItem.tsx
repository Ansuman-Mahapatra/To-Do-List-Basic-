import React from 'react';
import type { Todo } from '../types';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string, completed: boolean) => void;
    onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <div className="todo-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => onToggle(todo.id, e.target.checked)}
                    className="todo-checkbox"
                />
                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => onDelete(todo.id)}
                className="todo-delete-btn"
                aria-label="Delete Todo"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    );
};
