import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Todo from '../../components/Todo/Todo';

@observer
class TodoList extends React.Component {
    removeTodo(item) {
        const {
            store: { removeTodo },
        } = this.props;

        removeTodo(item);
    }

    toggleChecked(item) {
        const {
            store: { toggleCompleted },
        } = this.props;
        toggleCompleted(item);
    }

    render() {
        const {
            store: { todos },
        } = this.props;

        console.log(this.props.store.todos);

        return (
            <div className="container">
                <div>
                    {todos.map(item => (
                        <Todo
                            key={item.id}
                            value={item.value}
                            isCompleted={item.completed}
                            removeItem={() => this.removeTodo(item)}
                            toggleChecked={() => this.toggleChecked(item)}
                        />
                    ))}
                </div>
                <style jsx>{`
                    .container {
                        margin: 1rem 0;
                    }
                `}</style>
            </div>
        );
    }
}

TodoList.propTypes = {
    store: PropTypes.shape({
        addTodo: PropTypes.func,
    }).isRequired,
};

export default TodoList;
