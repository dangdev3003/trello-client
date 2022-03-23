import React from "react";

import "./Column.scss";
import Task from "components/Task/Task";

export default function Column() {
  return (
    <div className="column">
      <header>Brainstorm</header>
      <ul className="task-list">
        <Task />
        <li className="task-item">add what you'd like to work on below</li>
        <li className="task-item">add what you'd like to work on below</li>
        <li className="task-item">add what you'd like to work on below</li>
        <li className="task-item">add what you'd like to work on below</li>
      </ul>
      <footer>add another card</footer>
    </div>
  );
}
