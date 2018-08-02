import React from 'react';
import { observer } from 'mobx-react';

import DayCard from '../DayCard/DayCard';
import AddTodoView from '../AddTodoView/AddTodoView';
import todoStore from '../../stores/todoStore';

@observer
class TodoPage extends React.Component {
    render() {
        return (
            <div>
                <DayCard />
                {todoStore.isAddingTodo ? <AddTodoView store={todoStore} /> : null}
            </div>
        );
    }
}

export default TodoPage;
