import React from 'react';
import { observer } from 'mobx-react';

@observer
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        if (e.target.value) {
            this.setState({ value: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { value } = this.state;
        const {
            store: { addTodo },
        } = this.props;
        addTodo(value);
        e.target.value = '';
    }

    render() {
        const {
            store: { todos },
        } = this.props;

        return (
            <div>
                <h1>{todos}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todo" onChange={this.handleChange} />
                    <button type="submit" onClick={this.createTodo}>
                        Add todo
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoList;
