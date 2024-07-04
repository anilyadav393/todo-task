import React from 'react'

import './App.css'

const TodoItem = ({todo, toggleComplete, editTodo, deleteTodo}) => (
  <li className={todo.completed ? 'completed' : ''}>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleComplete(todo.id)}
      aria-label={`Mark ${todo.text} as ${
        todo.completed ? 'incomplete' : 'complete'
      }`}
    />
    <span className="todo-text">{todo.text}</span>
    <button onClick={() => editTodo(todo)} className="edit-btn">
      Edit
    </button>
    <button onClick={() => deleteTodo(todo.id)} className="delete">
      Delete
    </button>
  </li>
)

export default TodoItem
