import React, {Component} from 'react';

class ToDoItem extends Component {
    constructor() {
        super()
        this.state = {
            checked: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            checked: !this.state.checked
        })
    }


    render() {
        const checkedStyle = {
            textDecoration: "line-through",
            fontStyle: "italic",
            color: "#cdcdcd",
        }

        return (
            <div className="todoitem">
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                <p style={this.state.checked ? checkedStyle : null}>{this.props.text}</p>
                <button>Delete</button>
            </div>
          );
    }
}

export default ToDoItem;
