import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.js";
import "./App.scss";
import ProgressBar from "./components/Progress-Bar/ProgressBar.js";
import Title from "./components/Title/Title.js";
import Addtask from "./components/Addtask/Addtask.js";
import Input from "./components/Input/Input.js";
import Tasks from "./components/Tasks/Tasks.js";
import { v4 as uuidv4 } from 'uuid';
import hero from './core/images/hero.png'
import footerLeft from './core/images/footer_left2.png'
import footeright from './core/images/footer_right2.png'


function App() {
  const [display, setDisplay] = useState(false);
  const [task, setTask] = useState([]);

  const checkTime = () => {
    if (new Date().getHours() === 0) {
      setTask([])
      console.log("reset");
    }
  }
  setInterval(checkTime, 30000 * 10);

  const handleClick = e => {
    setDisplay(!display);
  };

  const addItem = (title, date) => {
    const newItem = {
      id: uuidv4(),
      title: title,
      date: date
    };
    setTask([...task, newItem]);
  };

  const removeItem = item => {
    setTask([...task.filter(task => task.id !== item)]);
  };

  return (
    <main className="App">
      <Header />
      {/* <img src={hero} alt="" className="add-logo" /> */}
      {/* <Title />
      <ProgressBar /> */}
      <ul className="task-list">
        <Input display={display} addItem={addItem} click={handleClick} />
        <Tasks task={task} remove={removeItem} />
      </ul>
      <Addtask click={handleClick} display={display} />
      {/* <img src={footerLeft} alt="" className="footer-left" /> */}
      {/* <img src={footeright} alt="" className="footer-right" /> */}
    </main>
  );
}

export default App;
