import React from 'react';

import TodoList from '../TodoList/TodoList';
import todoStore from '../../stores/todoStore';

const DayView = () => (
    <div className="container">
        <h1 className="page-title">Thursday</h1>
        <TodoList store={todoStore} />
        <style jsx>{`
            .container {
                background-color: var(--white);
                padding: 2rem;
            }

            .page-title {
                margin: 0;
            }
        `}</style>
    </div>
);

export default DayView;
