import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: 123 };
    }

    render() {
        const { value, removeItem } = this.props;
        return (
            <div className="todo">
                {value}
                <button type="button" onClick={removeItem}>
                    delete
                </button>
                <style jsx>{`
                    .todo {
                        border: 1px solid black;
                        background: var(--white);
                        padding: 0.5rem 1rem;
                        margin-bottom: 1rem;
                    }
                `}</style>
            </div>
        );
    }
}

export default Todo;
