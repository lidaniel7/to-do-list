import React, { Component } from 'react';
import Todos from './Components/Todos.js';
import './App.css';
import Header from './Components/Header.js';
import ToDoItem from './Components/ToDoItem.js';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Header />
        <ToDoItem text="Default item"/>
      </div>
    );
  }
}

export default App;
