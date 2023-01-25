import React from "react";
import { useProject } from "../../context/projectContext";
import "./Navbar.scss";
import { ChevronDown } from "react-feather";

export default function Navbar({ setShowTicket }) {
  const { currentProject } = useProject();
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <h1>Kanban</h1>
      </div>
      <div className="navbar-heading">
        <h2>{currentProject.title}</h2>
        <div className="navbar-heading-chevron">
          <ChevronDown />
        </div>
      </div>
      <button onClick={() => setShowTicket(true)}>Add new ticket</button>
    </nav>
  );
}
