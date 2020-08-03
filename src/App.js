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
    todoList: this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }

      } else {
        return item
      }
    })
  })
}
  render() {
    

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
