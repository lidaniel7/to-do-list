import React, { Component } from 'react';
import Todos from './Components/Todos.js';
import './App.css';
import Header from './Components/Header.js';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Header />
        <Todos />
      </div>
    );
  }
}

export default App;
