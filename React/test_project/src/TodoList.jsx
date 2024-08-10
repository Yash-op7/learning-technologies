import React from 'react';

const TodoList = ({ todos }) => {
    return (
        todos.map(todo => <div key={todo.id}>
            <ul>
                <li>{todo.id}</li>
                <li>{todo.body}</li>
            </ul>
        </div>)
    )
};

export default TodoList;