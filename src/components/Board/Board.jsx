import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import { useProject } from "../../context/ProjectContext";

export default function Board() {
  const { projects, currentProject, changeBoard } = useProject();
  console.log(currentProject);
  return (
    <div className="board">
      {currentProject.board.map((column) => {
        return (
          <div key={column.name} className="board-column">
            <div className="board-title">
              <div className={"board-title-icon " + column.name}></div>
              <h4>Done</h4>
            </div>
            {column.tickets.map((ticket) => {
              return <ticket key={ticket.id} item={ticket} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
