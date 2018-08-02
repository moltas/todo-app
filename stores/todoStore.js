import { observable, action } from 'mobx';
import { observer } from '../node_modules/mobx-react';

class Todo {
    @observable
    value;

    @observable
    id;

    @observable
    completed;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.completed = false;
    }
}

export class TodoStore {
    @observable
    todos = [];

    @observable
    todoLimit = 3;

    @observable
    isAddingTodo = false;

    @action
    addTodo = item => {
        if (this.todos.length < this.todoLimit) {
            this.todos.push(new Todo(item));
        }
    };

    @action
    removeTodo = item => {
        const filteredList = this.todos.filter(todo => todo !== item);
        this.todos = filteredList;
    };

    @action
    toggleCompleted = item => {
        item.completed = !item.completed;
    };

    @action
    openAddTodoView = () => {
        this.isAddingTodo = true;
    };

    @action
    closeAddTodoView = () => {
        this.isAddingTodo = false;
    };
}

export default new TodoStore();
