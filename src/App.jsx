import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import ListToDo from './ListToDo';

function App() {
  const initialTodos = [
    { id: 1, text: 'Buy Milk', completed: false },
    { id: 2, text: 'Learn React', completed: false },
    { id: 3, text: 'Buy More Milk', completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

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




