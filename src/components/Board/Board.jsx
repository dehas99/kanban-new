import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";

export default function Board() {
  return (
    <div className="board">
      <div className="board-column">
        <div className="board-title"></div>
        <div className="board-title-icon"></div>
        <h4>To do</h4>
      </div>
      <Ticket
        item={{
          id: "1",
          title: "This is description",
          tasks: ["hoppa 3 gånger", "Rasta hunden"],
        }}
      />

      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon"></div>
          <h2>Doing </h2>
        </div>
      </div>
      <div className="board-column">
        <div className="board-title">
          <div className="board-title-icon"></div>
          <h4>Done</h4>
        </div>
      </div>
    </div>
  );
}
