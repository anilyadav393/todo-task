import React, {useState, useEffect} from 'react'

import './App.css'

import TodoList from './TodoList'

import TodoForm from './TodoForm'

const App = () => {
  const [todos, setTodos] = useState([])
  const [editing, setEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
    setTodos(savedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    )
  }

  const editTodo = todo => {
    setEditing(true)
    setCurrentTodo(todo)
  }

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)))
    setEditing(false)
    setCurrentTodo({})
  }

  return (
    <div className="App">
      <header>
        <h1>Get Things Done!</h1>
      </header>
      <main>
        <TodoForm
          editing={editing}
          currentTodo={currentTodo}
          addTodo={addTodo}
          updateTodo={updateTodo}
          setEditing={setEditing}
        />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      </main>
    </div>
  )
}

export default App
