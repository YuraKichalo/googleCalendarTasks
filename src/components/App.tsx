import React from 'react';
import { observer } from "mobx-react";
import { BrowserRouter, Route } from 'react-router-dom';

import TodoList from "./TodoList";
import Auth from "./Auth.js";
import Header from "./Header";


const App: React.FC = observer((props) => {
  return (
    <BrowserRouter>
        <div className="ui container">
            <Header />
            <Route exact path='/' component={Auth} />
            <Route exact path='/list' component={TodoList} />
        </div>
    </BrowserRouter>
  );
});

export default App;
