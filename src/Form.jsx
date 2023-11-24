import React, { useRef } from "react";

export default function Form({ addTodo }) {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;
    const text = inputElement.value.trim(); // Trim pour supprimer les espaces inutiles
    if (text !== "") {
      addTodo(text);
      inputElement.value = ""; // Réinitialiser la valeur de l'input après l'ajout
    }
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <button className="addBtn" onClick={clickHandler}>Add todo</button>
    </div>
  );
}
