import React from 'react';
import Todo from './Todo';


const ToDoList = (props) => {
    

    return(
        <div>
            {props.todoList.map(item => {
                return <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted}/>
            })}
        </div>
    )
}

export default ToDoList;
