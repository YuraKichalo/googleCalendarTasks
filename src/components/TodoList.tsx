import React, { Component } from 'react';
import { observer } from 'mobx-react';
import store from '../stores/AppStore';
import TodoListItem from "./TodoListItem";

@observer
export default class TodoList extends Component {
    renderList = () => {
        return store.tasks.map(({ id, title }) => {
            return <TodoListItem key={id} id={id} title={title}/>
        })
    };

    render () {
        return (
            <div>
                <ul className='ui divided items'>
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}