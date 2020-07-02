import React, {Component} from 'react';

class Todos extends Component {
    constructor() {
        super()
        this.state = {
            checked: "checked",
            text: "asdfasfoiwjefo",
            delete: "delete"
        }
    }
    render() {
        return (
            <div className="App">
              <h1>{this.state.checked}</h1>
            </div>
          );
    }
}

export default Todos;
