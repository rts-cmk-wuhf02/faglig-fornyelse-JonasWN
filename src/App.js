import React from "react";
import Header from "./components/Header/Header.js";
import "./App.scss";
import TodoItem from "./components/Todo-Item/TodoItem.js";
import ProgressBar from "./components/Progress-Bar/ProgressBar.js";
import Title from "./components/Title/Title.js";
import Addtask from "./components/Addtask/Addtask.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <ProgressBar />
      <TodoItem />
      <Addtask />
    </div>
  );
}

export default App;
