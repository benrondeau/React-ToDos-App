import React, { Component } from 'react';
import TodoList from './TodoList';
import seededTodos from './todos.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Todo list app</h2>
        <TodoList initialTodos={seededTodos} />
      </div>
    );
  }
}

export default App;
