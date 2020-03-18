import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/";
import TaskBar from "./component/taskbar/";
import TaskList from "./component/tasklist/";

function App() {
  return (
    <div>
      <Header />
      <TaskBar />
      <TaskList />
    </div>
  );
}

export default App;
