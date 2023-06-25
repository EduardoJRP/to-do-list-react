import './App.css';
import React, { useState } from 'react';
import ToDo from './components/ToDo';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    const newInput = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      inputName: input,
      done: false,
    }
    setList([...list, newInput]);
  };

  const deleteTodo = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    setList(
      list.map((todo) => {
        if (todo.id === id){
          return {...todo, done: true};
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="App">
      <header className='title-background'>
        <h1 className="title"> Todo List </h1>
      </header>
      <div className="addTask">
        <input className="todo-input" onChange={handleChange}/>
        <button className="add-todo" onClick={addTask}> Add Task </button>
      </div>
      <div className="list">
        {list.map((todo) => {
          return (
            <ToDo 
              inputName={todo.inputName} 
              id={todo.id}
              done={todo.done}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
            )
        })}
      </div>
    </div>
  );
}

export default App;