import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: ""
        }
    }
    

    handleChanges = e => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.task)
        this.setState({
            task: ""
        })
    }

    render() {

        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='task'
                        value={this.state.task}
                        onChange={this.handleChanges}></input>
                    <button onClick={this.handleSubmit}>Add Task</button>
                    <button >Clear Completed</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;