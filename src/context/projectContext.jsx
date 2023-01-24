import React, { useState, useContext, createContext } from "react";
import { projectsData } from "./project-data";

const ProjectContext = createContext({});

export function useProject() {
  return useContext(ProjectContext);
}
const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];
  console.log(currentProject);

  function changeBoard(index) {
    setCurrentIndex(index);
  }
  function addNewProject(title) {
    if (!title) return;
    const newProject = {
      title: title,
      id: projects.length + 1,
      board: [
        {
          name: "Todo",
          tickets: [],
        },
        {
          name: "Doing",
          tickets: [],
        },
        {
          name: "Done",
          tickets: [],
        },
      ],
    };
    setProjects([...projects, newProject]);
    setCurrentIndex(projects.length);
  }
  const value = {
    changeBoard: changeBoard,
    addNewProject: addNewProject,
    currentProject: currentProject,
    projects: projects,
  };
  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
export default ProjectProvider;
