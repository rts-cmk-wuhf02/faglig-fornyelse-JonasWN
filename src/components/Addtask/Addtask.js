import React, { useState } from "react";
import "./addtask.scss";

const Addtask = (props) => {

  return (
      <div className="add-task" onClick={props.click}>
        <p className="add-task__icon">+</p>  
      </div>
  );
};

export default Addtask;
