import React from 'react'

function TaskList({tasks}) {
  return (
    <div>
        { tasks ? (
            <ol>
                {tasks.map((task) => (<li key={task.id}> {task.text} </li>))}
            </ol> )
        : (
            <p>Não há tarefas a mostrar.</p> ) } 
    </div>
  )
}

export default TaskList