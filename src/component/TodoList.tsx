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

  const onDelete = (id: number) => {
    setTodos((existingTodos) => {
      return existingTodos.filter((todo) => id !== todo.id);
    });
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center shadow-lg
     py-5 overflow-hidden">
      <h1 className="text-4xl font-bold underline pb-6"> Todo List</h1>
      <ul role="list" className="divide-y divide-gray-400">
        {todos.map((todo) => (
          <li key={todo.id} className="flex gap-x-1 py-4">
            <div
            id="text-task" 
            className="bg-primary mr-2 mt-2 flex h-5 w-full items-left pl-3 rounded-full text-base"
            style={{textDecoration: todo.completed ? "line-through" : "none",
                }}>
              {todo.text}
            </div>
            <> 
            {/* id="btns-area"
            className="border border-cyan-300 items-end"> */}
              <button
                id="btn-crossout"
                className="h- min-w-[4rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
                onClick={() => handleToggle(todo.id)}
              >
                {todo.completed ? "Undo" : "Done"}
              </button>
              <button
                id="btn-remove"
                className="h-8 min-w-[6rem] rounded-lg border-2 border-red-600 bg-red-500 text-red-50 shadow-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-600"
                onClick={() => onDelete(todo.id)}
              >
                Remove
              </button>
            </>
          </li>
        ))}
      </ul>
      <section>
        <input
          className="h-12 min-w-[12rem] rounded-lg indent-4 border focus:outline-none focus:ring focus:ring-blue-600 font-semibold "
          type="text"
          placeholder="Add item"
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button
          className="h-10 min-w-[8rem] rounded-lg ml-4 border-2 border-blue-600 bg-blue-500 text-blue-50 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-600"
          onClick={handleClick}
        >
          Add to list
        </button>
      </section>
    </div>
  );
};
