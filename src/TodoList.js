import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, toggleComplete, editTodo, deleteTodo}) => (
  <ul>
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </ul>
)

export default TodoList
