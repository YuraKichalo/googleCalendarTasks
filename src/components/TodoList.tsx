import React, { Component } from 'react';
import { observer } from 'mobx-react';
// @ts-ignore
import ApiCalendar from 'react-google-calendar-api';

import store from '../stores/AppStore';
import TodoListItem from "./TodoListItem";
import TodoListInput from "./TodoListInput";

@observer
export default class TodoList extends Component {
    renderList = () => {
        return store.tasks.map(({ id, title }) => {
            return <TodoListItem key={id} id={id} title={title}/>
        })
    };

    render () {
        console.log(`sign In status: ${ApiCalendar.sign}`);
        return (
            <div>
                <TodoListInput />
                <ul className='ui divided items'>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}