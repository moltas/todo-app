import React from 'react';

class AddTodoView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (document !== undefined) {
            document.getElementById('add-todo-input').focus();
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { value } = this.state;
        const {
            store: { addTodo, closeAddTodoView },
        } = this.props;
        addTodo(value);
        this.setState({ value: '' });
        closeAddTodoView();
    }

    render() {
        const { value } = this.state;
        const {
            store: { closeAddTodoView },
        } = this.props;
        return (
            <div>
                <div className="modal-container">
                    <h3>Add your todo</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input className="text-field" type="text" id="add-todo-input" onChange={this.handleChange} value={value} />
                    </form>
                </div>
                <div className="modal-overlay" onClick={() => closeAddTodoView()} tabIndex="-1" role="button" />
                <style jsx>{`
                    .modal-container {
                        position: fixed;
                        top: 30%;
                        background: var(--white);
                        width: 350px;
                        padding: 2rem;
                        z-index: 11;
                    }

                    .modal-overlay {
                        position: fixed;
                        top: 0; left 0; right: 0; bottom: 0;
                        background: rgba(0, 0, 0, 0.4);
                        cursor: pointer;
                        z-index: 10;
                    }

                    .text-field {
                        width: 100%;
                        height: 50px;
                        font-size: 2em;
                        border: none;
                        outline: none;
                        border-bottom: 2px solid black;
                    }

                    // @media (min-width: 480px) {
                    //     top: 0;
                    //     left: 0;
                    //     right: 0;
                    //     bottom: 0;
                    //     background: red;
                    // }
                `}</style>
            </div>
        );
    }
}

export default AddTodoView;
