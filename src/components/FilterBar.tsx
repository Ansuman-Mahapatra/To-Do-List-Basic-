import React from 'react';

interface FilterBarProps {
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => {
    return (
        <div className="filter-bar" style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            {(['all', 'active', 'completed'] as const).map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`filter-btn ${filter === f ? 'active' : ''}`}
                    style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        background: filter === f ? 'var(--primary-color)' : 'transparent',
                        color: filter === f ? '#fff' : 'var(--text-color)',
                        border: filter === f ? 'none' : '1px solid var(--glass-border)',
                        textTransform: 'capitalize'
                    }}
                >
                    {f}
                </button>
            ))}
        </div>
    );
};
