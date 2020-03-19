import React, { useRef, useState, useEffect } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosCheckmarkCircle,
  IoMdCheckmarkCircleOutline
} from "react-icons/io";
import { MdPlaylistAddCheck } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";

const Checked = ({ index }) => {
  const [checked, setChecked] = useState(false);

  const onChecked = e => {
    setChecked(!checked);
  };

  const smallIcon = {
    fontSize: "2rem"
  };
  return (
    <div
      className={"task-item__avatar " + (checked ? "checked" : "")}
      onClick={onChecked}
    >
      {checked ? (
        <IoMdCheckmarkCircleOutline className="avatar__icon" />
      ) : (
        <FaRegCalendarCheck className="avatar__icon" style={smallIcon} />
      )}
    </div>
  );
};
export default Checked;
