import React, { Component } from 'react';
import Todos from './Components/Todos.js';
import './App.css';
import Header from './Components/Header.js';
import ToDoItem from './Components/ToDoItem.js';
import InputBox from './Components/InputBox.js';

class App extends Component{
  constructor() {
    super()
    this.state = {
      taskList: [],
      currentItem: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: new Date(),
      name: this.state.currentItem,
      completed: false,
    }
    const updatedList = this.state.taskList.concat(newItem);
    this.setState({
      taskList: updatedList,
      currentItem: '',
    })
    event.target.reset();
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      currentItem: event.target.value
    })
  }

  render() {
    const itemList = this.state.taskList.map(task => <ToDoItem name={task.name} key={task.id} completed={task.completed}/>)

    return (
      <div className="App">
        <Header />
        <InputBox handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        {itemList}
      </div>
    );
  }
}

export default App;
