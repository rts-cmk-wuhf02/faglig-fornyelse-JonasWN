import React from "react";
import "./TodoItem.scss";
import {
  IoIosArrowDropupCircle,
  IoIosCheckmarkCircle,
  IoIosHourglass
} from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

const TodoItem = () => {
  return (
    <ul className="task-list">
      <li className="task-list__task-item">
        <div className="task-item__avatar">
          <IoIosCheckmarkCircle className="avatar__icon" />
        </div>
        <div className="task-item__info">
          <h3 className="info__heading">Workout</h3>
          <p className="info__time">16:00</p>
        </div>
        <FaRegBell className="task-item__alarm" />
      </li>
      <li className="task-list__task-item">
        <div className="task-item__avatar">
          <IoIosArrowDropupCircle className="avatar__icon" />
        </div>
        <div className="task-item__info">
          <h3 className="info__heading">Clean</h3>
          <p className="info__time">17:00</p>
        </div>
        <FaRegBell className="task-item__alarm" />
      </li>
      <li className="task-list__task-item">
        <div className="task-item__avatar">
          <IoIosArrowDropupCircle className="avatar__icon" />
        </div>
        <div className="task-item__info">
          <h3 className="info__heading">Homework</h3>
          <p className="info__time">21:00</p>
        </div>
        <IoIosHourglass className="task-item__alarm" />
      </li>
    </ul>
  );
};

export default TodoItem;
