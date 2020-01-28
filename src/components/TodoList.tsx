import React, { Component } from 'react';
import { observer } from 'mobx-react';
// @ts-ignore
import ApiCalendar from 'react-google-calendar-api';
import {create} from "mobx-persist";

import store from '../stores/AppStore';
import TodoListItem from "./TodoListItem";
import TodoListInput from "./TodoListInput";

const hydrate = create({
    storage: localStorage,
    jsonify: true
});

@observer
export default class TodoList extends Component {
    constructor() {
        // @ts-ignore
        super();
        hydrate('todo', store)
    }

    renderList = () => {
        return store.tasks.map(({ id, title }) => {
            return <TodoListItem key={id} id={id} title={title}/>
        })
    };

    render () {
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