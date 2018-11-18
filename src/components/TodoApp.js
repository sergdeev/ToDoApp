import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class TodoApp extends Component {
  render() {
    return (
      <div className = 'app'>
        <h2>ToDo</h2>
        <div>
            <AddTodo />
            <TodoList />
            <Footer />
        </div>
      </div>
    );
  }
}

export default TodoApp;
