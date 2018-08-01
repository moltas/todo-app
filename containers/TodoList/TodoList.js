import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Button from '../../components/Button';
import Todo from '../../components/Todo/Todo';
import TextInput from '../../components/TextInput/TextInput';

@observer
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { value } = this.state;
        const {
            store: { addTodo },
        } = this.props;
        addTodo(value);
        this.setState({ value: '' });
    }

    removeTodo(item) {
        const {
            store: { removeTodo },
        } = this.props;

        removeTodo(item);
    }

    render() {
        const {
            store: { todos, todoLimit },
        } = this.props;

        const { value } = this.state;

        return (
            <div className="container">
                <div>
                    {todos.map(item => (
                        <Todo key={item.id} value={item.value} removeItem={() => this.removeTodo(item)} />
                    ))}
                </div>
                {todos.length < todoLimit ? (
                    <form onSubmit={this.handleSubmit}>
                        <TextInput name="todo" handleChange={this.handleChange} value={value} />
                        <Button type="submit">Add todo</Button>
                    </form>
                ) : null}
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
