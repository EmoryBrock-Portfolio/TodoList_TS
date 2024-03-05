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

  // function handleRemove(id) {
  //   const newTodoList = todos.filter((todo) => todo.id !== id)
  //   setTodos(newTodoList)
  // }

  const onDelete = (index) => {
    setTodos((existingTodos) => {
      return existingTodos.filter((_, currentIndex) => currentIndex !== index)
    })
  }



  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text} 
            {/* <button className="btn_remove" typeof="button" onClick={()=>handleRemove(todo.id)}>Remove</button> */}
            <button onClick={() => handleToggle(todo.id)}>Complete</button>
            <button onClick={() => onDelete(index)}>Remove</button>
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
