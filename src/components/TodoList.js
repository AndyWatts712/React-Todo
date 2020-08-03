import React from 'react';
import Todo from './Todo';


const ToDoList = (props) => {
console.log('PROPS',props)
    const toggleCompleted = id => {
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

    return(
        <div>
            {props.todoList.map(item => {
                return <Todo key={item.id} item={item} toggleCompleted={toggleCompleted} />
            })}
        </div>
    )
}

export default ToDoList;
