import React from 'react';
import ToDoList from './components/TodoList';
import TodoForm from './components/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
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
