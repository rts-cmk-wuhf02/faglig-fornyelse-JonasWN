import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const RemoveTask = ({ remove, index }) => {
  const onRemove = () => {
    console.log(index);
    remove(index);
  };

  return (
    <div className="task-item__avatar">
      <IoIosArrowDropdownCircle className="avatar__icon" onClick={onRemove} />
    </div>
  );
};

export default RemoveTask;
