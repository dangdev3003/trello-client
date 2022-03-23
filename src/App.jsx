import React from "react";

import "./app.scss";

// custom components
import AppBar from "components/AppBar/AppBar";
import BoardBar from "components/BoardBar/BoardBar";
import BoardContent from "components/Boardcontent/BoardContent";

function App() {
  return (
    <div className="trello-container">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
