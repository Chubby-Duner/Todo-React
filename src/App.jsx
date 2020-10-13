import React from 'react';
import './App.css';

import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <h1>Todos</h1>
      <Todo />
    </div>
  );
}

export default App;

/*
  Todo
    AddTodo
    Todolist
      TodoItem
    Todofilter
*/