import React from "react";
import "./TodoItem.scss";
import {
  IoIosCheckmarkCircle,
} from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

const TaskItem = (props) => {
   return (
    <li className="task-list__task-item">
    <div className="task-item__avatar">
      <IoIosCheckmarkCircle className="avatar__icon" />
    </div>
    <div className="task-item__info">
      <h3 className="info__heading">{props.task.title}</h3>
      <p className="info__time">16:00</p>
    </div>
    <FaRegBell className="task-item__alarm" />
  </li>
   )
};

export default TaskItem;
