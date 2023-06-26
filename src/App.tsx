import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'

export function App() {
  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  )
}
