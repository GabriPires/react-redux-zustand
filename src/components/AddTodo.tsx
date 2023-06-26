import { FormEvent, useState } from 'react'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  function handleNewTodo(e: FormEvent) {
    e.preventDefault()
    console.log(newTodo)
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="Novo to-do"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
