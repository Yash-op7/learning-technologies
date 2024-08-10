import TodoList from "./TodoList";

import { useState } from "react";

function App() {

  const [todos, SetTodos] = useState([{id:1, body:'bathe'}, {id:2, body:'eat'}])

  return (
    <>
    <TodoList todos = {todos}/>
    <input type="text" />
    <button> Add Todo</button>
    <button>Clear Complete</button>
    <div>0 todos left</div>
    </>
  );
}

export default App;
