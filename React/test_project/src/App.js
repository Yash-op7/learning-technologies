import TodoList from "./TodoList";

import { useEffect, useState } from "react";

function App() {

  const [todos, SetTodos] = useState([{id:1, body:'bathe', done:true}, {id:2, body:'eat', done:false}])

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const curr = newTodos.find(todo => todo.id === id)
    curr.done = !curr.done
    SetTodos(newTodos)
  }

  useEffect(() => {},[])
  return (
    <>
    <TodoList todos = {todos} toggleTodo={toggleTodo}/>
    <input type="text" />
    <button> Add Todo</button>
    <button>Clear Complete</button>
    <div>0 todos left</div>
    </>
  );
}

export default App;
