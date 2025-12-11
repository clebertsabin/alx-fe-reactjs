import React, { useState } from "react";

const initialTodos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Write Tests", completed: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 flex-1 mr-2"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center mb-2 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className="cursor-pointer"
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
