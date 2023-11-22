import React, {useState} from 'react';
const ListToDo = function (){
    const initialTodos = ["Buy Milk", "Learn React","Buy More Milk"];
    const [todos, setTodos]= useState(initialTodos)
    return (
        <>
        <h2>Todos</h2>
        <ul>
            {todos.map(function(todo) {
                return (
                    <li key={todo}>
                        <input type="checkbox" /> {todo}
                    </li>
                );
            })}
        </ul>
        </>
    ); 
}
export default ListToDo