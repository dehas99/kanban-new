import React, { useState } from "react";
import Board from "./components/Board/Board";
import SideNav from "./components/SideNav/SideNav";
import Navbar from "./components/Navbar/Navbar";
import CreateTicket from "./components/CreateTicket/CreateTicket";
import ProjectsDropDown from "./components/ProjectsDropDown/ProjectsDropDown";

function App() {
  const [showAddTicket, setShowTicket] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="App">
      <Navbar setShowTicket={setShowTicket} setShowDropDown={setShowDropDown} />
      <main>
        <SideNav />
        <Board />
      </main>
      {showAddTicket && <CreateTicket setShowAddTicket={setShowTicket} />}
      {showDropDown && <ProjectsDropDown setShowDropDown={setShowDropDown} />}
    </div>
  );
}

export default App;
