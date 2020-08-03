import React from 'react'

const Todo = (props) => {


console.log ('PRPS', props)


        return(
            <div onClick={() => props.toggleCompleted(props.item.id)}>
               <p>{props.item.task}</p>
            </div>
        )
    }

export default Todo;