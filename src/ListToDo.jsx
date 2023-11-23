import React, { useState } from 'react';

const ListToDo = function () {
  const initialTodos = [
    { id: 1, text: "Buy Milk", completed: false },
    { id: 2, text: "Learn React", completed: false },
    { id: 3, text: "Buy More Milk", completed: false }
  ];

  const [todos, setTodos] = useState(initialTodos);

  const handleToggle = (id) => {
    // On crée une nouvelle liste de todos en modifiant l'état de la tâche avec l'ID correspondant
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />{" "}
              {todo.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListToDo;
