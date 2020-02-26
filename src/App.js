import React, { useState } from "react";
import Header from "./components/Header/Header.js";
import "./App.scss";
import ProgressBar from "./components/Progress-Bar/ProgressBar.js";
import Title from "./components/Title/Title.js";
import Addtask from "./components/Addtask/Addtask.js";
import Input from './components/Input/Input.js'
import Tasks from "./components/Tasks/Tasks.js";

function App() {

  const [display, setDisplay] = useState(false)
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Workout",
    },
    {
      id: 2,
      title: "Clean Room",
    },
    {
      id: 3,
      title: "HomeWork",
    },
    
  ])


  const handleClick = (e) => {
    setDisplay(!display)
  }


  const addItem = (title) => {
    
    const newItem = {
      id: task.length + 1,
      title: title
    }
    setTask([newItem, ...task])
  }

  return (
    <div className="App">
      <Header />
      <Title />
      <ProgressBar />
      <ul className="task-list">
        <Input display={display} addItem={addItem} click={handleClick}/>
        <Tasks task={task}/>
      </ul>
      <Addtask click={handleClick}  />
    </div>
  );
}

export default App;
