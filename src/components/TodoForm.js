import React from 'react';

class TodoForm extends React.Component {

    constructor () {
        super();
        this.state = {
            todoItem: ""
        }
    }

    handleChanges = e => {
        this.setState({
            todoItem: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.todoItem)
        this.setState({
            todoItem: ""
        })
    }

    render() {

        return(
            <div>
                <input
                    type='text'
                    name='todoItem'
                    value={this.state.todoItem}
                    onChange={this.handleChange}></input>
                <button>Add Task</button>
                <button>Clear Task</button>
            </div>
        )
    }
}
export default TodoForm;