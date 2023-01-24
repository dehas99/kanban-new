import React, { useState } from "react";
import "./Ticket.scss";

export default function Ticket({ item }) {
  const [showList, setShowList] = useState(false);
  return (
    <div className="ticket" onClick={() => setShowList(!showList)}>
      <h3 className="heading-m">item.titel</h3>
      <p className="body-m">{item.description}</p>
      <p className="body-m">{item.tasks.length}2 subtasks</p>
      {showList ? (
        <ul>
          {item.tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
