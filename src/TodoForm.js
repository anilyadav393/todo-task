import React, {useState, useEffect} from 'react'

const TodoForm = ({editing, currentTodo, addTodo, updateTodo, setEditing}) => {
  const [inputValue, setInputValue] = useState(editing ? currentTodo.text : '')

  useEffect(() => {
    if (editing) {
      setInputValue(currentTodo.text)
    }
  }, [editing, currentTodo])

  const handleSubmit = e => {
    e.preventDefault()
    if (editing) {
      updateTodo(currentTodo.id, {...currentTodo, text: inputValue})
    } else {
      addTodo({
        id: Date.now(),
        text: inputValue,
        completed: false,
      })
    }
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What is the task today?"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        aria-label="Todo input"
      />
      <button type="submit" className="add">
        {editing ? 'Update' : 'Add'}
      </button>
      {editing && (
        <button
          type="button"
          onClick={() => setEditing(false)}
          className="cancel"
        >
          Cancel
        </button>
      )}
    </form>
  )
}

export default TodoForm
