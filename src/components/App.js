import React, { Component } from "react";

import Board from "./Board";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">StakTask Pane (Trello Clone)</div>

        <Board />
      </div>
    );
  }
}

export default App;
