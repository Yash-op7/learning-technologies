import React from 'react'

export const Todo = ({todo, toggleTodo}) => {
  return (
    <div key={todo.id}>
        <label>
            <input type="checkbox" checked={todo.done} />
        </label>
        Task {todo.id}
    <ul>
        <li>{todo.body}</li>
    </ul>
</div>
  )
}
