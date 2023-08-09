import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

type TodosType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodosType[]>([]);
  let [newTitle, setNewTitle] = useState("");
  console.log(todos);

  const fetchFoo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };

  useEffect(() => {
    fetchFoo();
  }, []);
  const showMeFoo = () => {
    fetchFoo();
  };
  const del = () => {
    setTodos([]);
  };
  const addNewItem = () => {
    const newItem = {
      userId: 1,
      id: todos.length + 1,
      title: newTitle,
      completed: false,
    };
    setTodos([newItem, ...todos]);
    

  };
  return (
    <div className="App">
      <button onClick={showMeFoo}>Showe mee...</button>
      <button onClick={del}>delete...</button>
      <div>
        <Button callback={addNewItem} />
        <Input newTitle={newTitle} setNewTitle={setNewTitle} />
      </div>
      <ul>
        {todos.map((el) => {
          return (
            <li>
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

export default App;
