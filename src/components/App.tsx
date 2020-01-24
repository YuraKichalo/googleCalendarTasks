import React from 'react';
import { observer } from "mobx-react";

import TodoList from "./TodoList";
import TodoListInput from "./TodoListInput";


const App: React.FC = observer(() => {
  return (
    <div className="ui container">
        <TodoListInput />
        <TodoList />
    </div>
  );
});

export default App;
