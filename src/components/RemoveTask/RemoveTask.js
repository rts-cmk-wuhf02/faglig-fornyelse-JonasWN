import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const RemoveTask = ({ remove, index }) => {


  // remove task[index] from list
  const onRemove = () => {
    remove(index);
  };

  return (
    <div className="task-item__avatar">
      <IoIosArrowDropdownCircle className="avatar__icon" onClick={onRemove} />
    </div>
  );
};

export default RemoveTask;
