import React, { useState } from "react";
import "./addtask.scss";

const Addtask = ({ click, display }) => {
  return (
    <div className={"add-task " + (display ? "none" : "")} onClick={click}>
      <p className="add-task__icon">+</p>
    </div>
  );
};

export default Addtask;
