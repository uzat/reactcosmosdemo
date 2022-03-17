import React, { Component } from "react";
import "./App.css";
import Leads from "./components/leads/leads.component";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Leads</h1>
        <div className="search-bar" >
        </div>
        <app-leads />
        <Leads />
      </div>
    );
  }
}

export default App;
