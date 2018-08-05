import React from 'react';
import { observer } from 'mobx-react';
import { AddCircle } from '@material-ui/icons';

import TodoList from '../TodoList/TodoList';
import todoStore from '../../stores/todoStore';

@observer
class DayCard extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="top-section">
                    <div className="todays-date">
                        <div className="day-numbered">12</div>
                        <div className="month-and-year">
                            <div>Jan</div>
                            <div>2018</div>
                        </div>
                    </div>
                    <div>Tuesday</div>
                </div>
                {todoStore.todos.length === 0 ? (
                    <p className="add-todo-text">
                        Add <strong>three</strong> things you want to accomplish today
                    </p>
                ) : (
                    <TodoList store={todoStore} />
                )}
                {todoStore.todos.length < todoStore.todoLimit ? (
                    <span role="button" tabIndex={0} className="add-todo-button" onClick={() => todoStore.openAddTodoView()}>
                        <AddCircle style={{ fontSize: 54, backgroundColor: 'white' }} />
                    </span>
                ) : null}
                <style jsx>{`
                    .container {
                        background-color: var(--white);
                        padding: 2rem 2rem 5rem;
                        width: 300px;
                        position: relative;
                        box-shadow: 1px 3px 6px 0px #80808078;
                    }

                    .top-section {
                        padding-bottom: 2rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .todays-date {
                        display: flex;
                        font-size: 0.8em;
                    }

                    .day-numbered {
                        font-size: 2.5em;
                        margin-right: 0.5rem;
                    }

                    .month-and-year {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                    }

                    .add-todo-text {
                        letter-spacing: 2px;
                        line-height: 2;
                    }

                    .add-todo-button {
                        position: absolute;
                        bottom: -30px;
                        left: calc(50% - 30px);
                        cursor: pointer;
                        color: var(--green);
                    }
                `}</style>
            </div>
        );
    }
}

export default DayCard;
