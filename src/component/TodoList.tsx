import React, { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "take out the rubbish", completed: false },
    { id: 2, text: "fold the laundry", completed: false },
  ]);

  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };

  const onDelete = (id:number) => {
    setTodos((existingTodos) => {
      return existingTodos.filter((todo) => id !== todo.id)
    })
  }


  return (
    <div className="main-container">
      <h1 className="text-3l font-bold underline"> Todo List</h1>
      <ul class="list-inside">
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text} 
            <button id="btn-crossout" onClick={() => handleToggle(todo.id)}>{todo.completed ? "Undo" : "Done"}</button>
            <button id="btn-remove" onClick={() => onDelete(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add item"
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <button onClick={handleClick}>Add to list</button>
    </div>
  );
};
