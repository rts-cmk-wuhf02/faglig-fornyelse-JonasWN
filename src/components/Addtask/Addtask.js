import React, { useState } from "react";
import "./addtask.scss";

const Addtask = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <div className="add-task" onClick={handleClick}>
        +
      </div>
      <form action="" className={"task-form " + (display ? "display" : "")}>
        <input type="text" className="task-form__input" />
        <button type="submit" className="task-form__submit"></button>
      </form>
    </div>
  );
};

export default Addtask;
