import React, { Component } from 'react';
import Todos from './Components/Todos.js';
import './App.css';
import Header from './Components/Header.js';
import ToDoItem from './Components/ToDoItem.js';

class App extends Component{
  constructor() {
    super()
    // this.state = {
    //   inputs: [

    //   ],
    //   items: []
    // }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Hello")
    // this.setState({
    //   items: <ToDoItem />
    // })
  }

  handleChange(event) {
    event.preventDefault();
    console.log("hello")
    // this.setState({
    //   input: event.target.value
    // })
  }

  render() {
    const itemList = this.props.items.map(task => <ToDoItem name={task.name}/>)

    return (
      <div className="App">
        <Header />
        <form onSubmit={this.handleSubmit}>
            <input placeHolder="Enter a task" onChange={this.handleChange}/>
            <button>Add</button>
        </form>
        {itemList}
      </div>
    );
  }
}

export default App;
