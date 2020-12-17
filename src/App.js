import React, { useState, useEffect } from 'react';
import './App.css';
//Importing Components
import Form from "./components/Form"
import TodoList from "./components/TodoList"
//Dev Ed Build a Todo App With REACT

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //use effect
  useEffect(() => {
    filterHandler();
    //saveLocalTodos();
  }, [todos, status]);
  //Functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //const saveLocalTodos = () => {
    //if(localStorage.getItems('todos') === null ) {
    //  localStorage.setItem('todos', JSON.stringify([]));
   //} else {
    //  localStorage.setItem("todos", JSON.stringify(todos));
    //}
 // }
  return (
    <div className="App">
      <header>
        <h1>Todo</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
