import React from 'react';

function ToDo (props) {
    return (
    <div className="todo-box">
      <p className="todo" style={{backgroundColor: props.done ? "green" : "white"}}>{props.inputName}</p>
      <button className="todo-button" onClick={() => props.deleteTodo(props.id)}> X </button>
      <button className="todo-button" onClick={() => props.updateTodo(props.id)}> Done </button>
    </div>
    )
}

export default ToDo ;