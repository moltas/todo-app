import React from 'react';

import Checkbox from '../Checkbox/Checkbox';

const Todo = ({ value, isCompleted, removeItem, toggleChecked }) => (
    <div className={`todo ${isCompleted ? 'completed' : ''}`}>
        <button className="delete-icon" type="button" onClick={removeItem}>
            <i className="fas fa-times" />
        </button>
        <span>{value}</span>
        <Checkbox handleChange={() => toggleChecked()} checked={isCompleted} />
        <style jsx>{`
            .todo {
                background: var(--white);
                padding: 0.5rem 0;
                margin-bottom: 1.5rem;
                font-size: 0.9em;
                display: flex;
                justify-content: space-between;
                position: relative;
                cursor: pointer;
            }

            .todo:last-child {
                margin-bottom: 0;
            }

            .todo.completed {
                color: #c5c6ca;
            }

            .delete-icon {
                background: transparent;
                border: none;
                cursor: pointer;
                outline: none;
                color: var(--red);
                display: inline-block;
                position: absolute;
                left: -1.5rem;
            }
        `}</style>
    </div>
);

export default Todo;
