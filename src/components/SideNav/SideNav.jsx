import React, { useState } from "react";
import "./SideNav.scss";
import { useProject } from "../../context/projectContext";

export default function SideNav() {
  const { projects, currentProject, changeBoard, addNewProject } = useProject();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sidenav">
      <p>All BOARDS (2)</p>
      <ul>
        {projects.map((project, index) => (
          <li
            onClick={() => {
              changeBoard(index);
            }}
            key={project.id}
            className={currentProject.id === project.id ? "active" : undefined}
          >
            {project.title}
          </li>
        ))}
        <li
          className="create-board"
          onClick={() => {
            setIsOpen((currentValue) => !currentValue);
          }}
        >
          Create new board +
        </li>
      </ul>
      {isOpen && (
        <div className="create-project">
          <input type="text" />
          <button
            onClick={() => {
              addNewProject("hej");
            }}
          >
            Create project
          </button>
        </div>
      )}
    </div>
  );
}
