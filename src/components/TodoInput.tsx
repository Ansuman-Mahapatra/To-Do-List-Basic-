import React, { useState } from 'react';

interface TodoInputProps {
    onAdd: (text: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%', marginBottom: '1.5rem', position: 'relative' }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What needs to be done?"
                style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    paddingRight: '4rem',
                    borderRadius: '16px',
                    border: '1px solid var(--glass-border)',
                    background: 'var(--card-bg)',
                    backdropFilter: 'blur(10px)',
                    fontSize: '1rem',
                    color: 'var(--text-color)',
                    outline: 'none',
                    boxShadow: 'var(--shadow)',
                    transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.transform = 'scale(1.01)'}
                onBlur={(e) => e.target.style.transform = 'scale(1)'}
            />
            <button
                type="submit"
                disabled={!text.trim()}
                style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: text.trim() ? 'pointer' : 'not-allowed',
                    opacity: text.trim() ? 1 : 0.5
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </button>
        </form>
    );
};
