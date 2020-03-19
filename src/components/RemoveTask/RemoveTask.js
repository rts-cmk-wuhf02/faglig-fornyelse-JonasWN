import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const RemoveTask = ({ remove, index }) => {

  const [checked, setChecked] = useState(false)

  // remove task[index] from list
  const onRemove = () => {
    remove(index);
  };
  const onChecked = e => {
    setChecked(!checked)
  }
  return (
    <div className={"task-item__avatar " + (checked ? "checked" : "")} onClick={onChecked} >
      <IoIosArrowDropdownCircle className="avatar__icon" />
    </div>
  );
};

export default RemoveTask;
