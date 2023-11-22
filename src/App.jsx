import React from 'react';
import './App.css';
import InputField from './inputField'; 
import Button from './Button';
import ListToDo from './ListToDo';
import Checkbox from './Checkbox';

function App() {
  return (
    <div>
      <h1>My ToDo App</h1>
      <InputField />
      <Button />
      <ListToDo />
      <Checkbox />
    </div>
  );
}

export default App;


