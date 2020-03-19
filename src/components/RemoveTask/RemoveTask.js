import React, { useRef, useState, useEffect } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { FaRegCalendarCheck, FaRegBell } from "react-icons/fa";

const RemoveTask = ({ remove, index }) => {
  // remove task[index] from list
  const onRemove = () => {
    remove(index);
  };
  const iconStyle = {
    fontSize: "2rem"
  };
  return (
    <MdDeleteSweep
      className="task-item__alarm"
      onClick={onRemove}
      style={iconStyle}
    />
  );
};

export default RemoveTask;
