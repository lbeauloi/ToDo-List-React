import React from 'react';

const ListToDo = function ({ todos, setTodos }) {
  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h2>Todos :</h2>
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
              <button className="deleteBtn" onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListToDo;


