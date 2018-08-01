import { observable, action } from 'mobx';

class Todo {
    @observable
    value;

    @observable
    id;

    @observable
    complete;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}

export class TodoStore {
    @observable
    todos = [];

    @observable
    todoLimit = 3;

    @action
    addTodo = item => {
        if (this.todos.length < this.todoLimit) {
            this.todos.push(new Todo(item));
        }
    };

    removeTodo = item => {
        const filteredList = this.todos.filter(todo => todo !== item);
        this.todos = filteredList;
    };
}

export default new TodoStore();
