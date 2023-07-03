import React, { useState } from "react";
import "./ToDoList.css";
import ShowList from "../ShowList/ShowList";
import InputBlock from "../InputBlock/InputBlock";

const ToDoList = () => {
  const [todos, setToDos] = useState([]);

  const handleVote = (id) => {
    const updatedToDos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setToDos(updatedToDos);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("handleAdd", e.target.item.value);
    const newTask = {
      id: todos.length + 1,
      task: e.target.item.value,
      done: false,
    };
    setToDos([...todos, newTask]);
    e.target.reset();
  };

  return (
    <div className="smiley-voting-container">
      <h1>To do List...</h1>

      {!!todos.length && <ShowList todos={todos} handleVote={handleVote} />}
      <hr />
      <InputBlock handleAdd={handleAdd} />
    </div>
  );
};

export default ToDoList;
