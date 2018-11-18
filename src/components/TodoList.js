import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Todo from './Todo.js'
import { toggleTodo } from '../actions/action.js'




class TodoList extends Component {
    render(){
        return(
            <div className = {(this.props.todos.length === 0)? '' : 'todo-list'}>
            {
                this.props.todos.map(todo =>
                    <Todo
                        key = {todo.id}
                        id = {todo.id}
                        text = {todo.text}
                        completed = {todo.completed}
                        onToggle = {this.props.toggleTodo}
                    />
                )
            }
            </div>
        )
    }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}


const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => {
    return{
        toggleTodo: bindActionCreators(toggleTodo, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
