import React, { useState, useEffect } from "react";
import { FaRegBell } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { MdPlaylistAddCheck } from "react-icons/md";

const Input = props => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    props.addItem(title, date);
    props.click();
    setTitle("");
    setDate("");
  };

  useEffect(() => {
    if (document.querySelector(".info__heading").value === "") {
      document.querySelector(".info__heading").focus();
    }
  });

  const onChange = e => {
    setTitle(e.target.value);
  };

  const handleTime = e => {
    setDate(e.target.value);
  };

  return (
    <form action="" className={"task-form " + (props.display ? "display" : "")}>
      <li className="task-list__task-item">
        <div className="task-item__avatar">
          <MdPlaylistAddCheck className="avatar__icon" onClick={onSubmit} />
        </div>
        <div className="task-item__info">
          <input
            className="info__heading task-form__input"
            placeholder="Task Name"
            onChange={onChange}
            value={title}
          />
          <input
            className="info__time task-form__input time"
            placeholder="Time"
            onChange={handleTime}
            value={date}
          />
        </div>
        <FaRegBell className="task-item__alarm" />
      </li>
    </form>
  );
};

export default Input;
