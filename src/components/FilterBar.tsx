import React from 'react';

interface FilterBarProps {
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter }) => {
    return (
        <div className="filter-bar">
            {(['all', 'active', 'completed'] as const).map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`filter-btn ${filter === f ? 'active' : ''}`}
                >
                    {f}
                </button>
            ))}
        </div>
    );
};
