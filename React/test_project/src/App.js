import TodoList from "./TodoList";
import { useEffect, useState, useRef } from "react";

function App() {
  const [todos, SetTodos] = useState([
    { id: 1, body: 'bathe', done: true },
    { id: 2, body: 'eat', done: false }
  ]);

  const inputRef = useRef();
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todoApp.todos'));
    if (storedTodos) {
      SetTodos(storedTodos);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('todoApp.todos', JSON.stringify(todos));
  }, [todos]);
  
  
    const toggleTodo = (id) => {
      const newTodos = [...todos];
      const curr = newTodos.find(todo => todo.id === id);
      curr.done = !curr.done;
      SetTodos(newTodos);
    };
  const handleAddTodo = () => {
    const newTodoBody = inputRef.current.value;
    if (newTodoBody === '') return;

    // Generate a unique ID based on the maximum existing ID
    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const newTodo = { id: newId, body: newTodoBody, done: false };
    
    SetTodos(prevTodos => [...prevTodos, newTodo]);

    // Clear the input field
    inputRef.current.value = '';
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={inputRef} type="text" />
      <button onClick={handleAddTodo}> Add Todo</button>
      <button>Clear Complete</button>
      <div>{todos.filter(todo => !todo.done).length} todos left</div>
    </>
  );
}

export default App;
