import { observable, autorun } from 'mobx';

class TodoStore {
    @observable
    todos = ['buy stones', 'take a walk'];

    addTodo(item) {
        console.log('in store adding todo', item);
        this.todos.push(item);
    }
}

const store = new TodoStore();

export default store;

autorun(() => {
    console.log(store.todos);
});
