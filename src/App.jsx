import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import ListToDo from './ListToDo';

const LSKEY = 'MyToDoApp'; // lskey = Local Storage Key
function App() {
  const initialTodos = JSON.parse(localStorage.getItem(LSKEY + '.todos')) || []; // on doit changer notre initialTodos, avant on iniit avec un arrya vide, donc fatelment le lcoal storage allait se reste a chaque fois

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY + '.todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="title">
        <h1>My ToDo App</h1>
      </div>

      <div className="form">
        <Form addTodo={addTodo} />
      </div>

      <div className="todolist">
        <ListToDo todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;





