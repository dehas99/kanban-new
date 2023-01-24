import React from "react";
import "./SideNav.scss";
import { useProject } from "../../context/projectContext";

export default function SideNav() {
  const { projects, currentProject, changeBoard } = useProject();
  console.log(projects);
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
      </ul>
    </div>
  );
}
