import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

type TodosTYpe = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function App1() {
  const [todos, setTodos] = useState<TodosTYpe[]>([]);
  const fetchFoo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };
  console.log(todos);
  useEffect(() => {
    fetchFoo();
  }, []);

  const showMeTodos = () => {
    fetchFoo();
  };

  const deleteShowe = () => {
    setTodos([]);
  };
  const addNewItem = () => {
    const newItem = {
      userId: 6,
      id: todos.length + 1,
      title: "New New",
      completed: false,
    };
    setTodos([newItem, ...todos]);
  };

  return (
    <div className="App">
      <button onClick={showMeTodos}>showe</button>
      <button onClick={deleteShowe}>delete</button>

      <div>
        <Button callback={addNewItem} />
        <Input />
      </div>
      <ul>
        {todos.map((el) => {
          return (
            <li key={el.id}>
              <span>{el.id}</span>
              <input type="checkbox" checked={el.completed} />
              <span>{el.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


