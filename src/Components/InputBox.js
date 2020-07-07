import React, {Component} from 'react';

class InputBox extends Component {
    render() {

        const {handleChange, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit}>
            <input placeHolder="Enter a task" onChange={handleChange}/>
            <button>Add</button>
            </form>
          );
    }
}

export default InputBox;
