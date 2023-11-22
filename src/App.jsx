import React, {useState} from 'react';
import './App.css';
import InputField from './inputField'; 
import Button from './Button';
import ListToDo from './ListToDo';


function App() {
  return (
    <div className='container'>
        <div className='title'>
          <h1>My ToDo App</h1>
        </div>

        <div className='form'>
          <InputField />
          <Button />
        </div>
        
        <div className='todolist'>
          <ListToDo />
        </div>
    </div>
      
  );
}

export default App;


