import React, { useState } from "react";
import Board from "./components/Board/Board";
import SideNav from "./components/SideNav/SideNav";
import Navbar from "./components/Navbar/Navbar";
import CreateTicket from "./components/CreateTicket/CreateTicket";

function App() {
  const [showAddTicket, setShowTicket] = useState(false);
  return (
    <div className="App">
      <Navbar setShowTicket={setShowTicket} />
      <main>
        <SideNav />
        <Board />
      </main>
      {showAddTicket && <CreateTicket setShowAddTicket={setShowTicket} />}
    </div>
  );
}

export default App;
