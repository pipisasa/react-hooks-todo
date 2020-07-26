import React from 'react';

import Navbar from './components/Navbar';
import { Container } from 'reactstrap';
import TodoList from './components/TodoList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoProvider } from './contexts/todo.context/todo.provider';
import AddTodo from './components/TodoList/AddTodo';
function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Navbar/>
        <Container>
          <AddTodo/>
          <TodoList/>
        </Container>
      </div>
    </TodoProvider>
  );
}

export default App;
