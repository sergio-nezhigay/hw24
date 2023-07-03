import React from "react";
import "./ShowList.css";

function ShowList({ todos, handleVote }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleVote(todo.id)}
          className={todo.done ? "doneTask" : ""}
        >
          {todo.task}
        </li>
      ))}
    </ul>
  );
}

export default ShowList;
