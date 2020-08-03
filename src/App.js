import React from 'react';
import ToDoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoList = [
  {
    task: 'Buy BTC',
    id: 1,
    completed: false
  },
  {
    task: 'Cash out 401k',
    id: 2,
    completed: false
  }]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
  super();
  this.state = {
    todoList: todoList
  }
}

toggleCompleted = id => {
  this.setState({
    todoList: this.state.todoList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }

      } else {
        return task
      }
    })
  })
}

addItem = task => {
  const NewTask = {
    task: task,
    id: new Date(),
    completed: false
  }
  this.setState({
    todoList: [...this.state.todoList, NewTask]
  })
}
  render() {
    

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <ToDoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
