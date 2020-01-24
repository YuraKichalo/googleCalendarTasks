import React from 'react';
import { observer } from 'mobx-react';
import store from '../stores/AppStore';
import CalendarBtn from "./CalendarBtn";

interface TodoListProps {
    title: string,
    id: number
}

const TodoListItem: React.FC<TodoListProps> = observer(({ title, id }) => {
    return (
        <div className='item'>
            <li className='middle aligned content'>{title}</li>
            <button onClick={() => store.removeTask(id)} className='ui red basic button'>remove</button>
            <CalendarBtn />
        </div>
    )
});

export default TodoListItem;