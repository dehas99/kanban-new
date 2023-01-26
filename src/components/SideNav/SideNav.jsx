import React, { useState } from "react";
import "./SideNav.scss";
import { useProject } from "../../context/projectContext";
import Links from "../links/links";
export default function SideNav() {
  const { projects } = useProject();
  return (
    <div className="sidenav">
      <p>All BOARDS ({projects.length})</p>
      <Links />
    </div>
  );
}
