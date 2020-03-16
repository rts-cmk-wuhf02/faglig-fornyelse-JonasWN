import React, { useRef, useEffect, useState } from "react";
import TaskItem from "../Task-Item/TaskItem.js";
import RemoveTask from "../RemoveTask/RemoveTask";
import clamp from "lodash-es/clamp";
import swap from "lodash-move";
import { useGesture } from "react-with-gesture";
import { useSprings, animated, interpolate } from "react-spring";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

const fn = (order, down, originalIndex, curIndex, y) => index =>
  down && index === originalIndex
    ? {
        y: curIndex * 68 + y,
        scale: 1.1,
        zIndex: "1",
        shadow: 15,
        immediate: n => n === "y" || n === "zIndex"
      }
    : {
        y: order.indexOf(index) * 68,
        scale: 1,
        zIndex: "0",
        shadow: 1,
        immediate: false
      };

const Tasks = ({ task, remove }) => {
  useEffect(() => {
    order.current = task.map((_, index) => index);
    setSprings(fn(order.current));
  }, [task]);

  let order = useRef(task.map((_, index) => index)); // Store indices as a local ref, this represents the item order

  const [springs, setSprings] = useSprings(task.length, fn(order.current));
  const bind = useGesture(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      order.current.length - 1
    );
    const newOrder = swap(order.current, curIndex, curRow);
    setSprings(fn(newOrder, down, originalIndex, curIndex, y));
    if (!down) order.current = newOrder;
  });

  return springs.map(({ zIndex, shadow, y, scale }, i) => (
    <animated.li
      {...bind(i)}
      className="task-list__task-item"
      key={i}
      style={{
        zIndex,
        boxShadow: shadow.interpolate(
          s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
        ),
        transform: interpolate(
          [y, scale],
          (y, s) => `translate3d(0,${y}px,0) scale(${s})`
        )
      }}
    >
      {/* <div className="task-item__avatar">
        <IoIosArrowDropdownCircle className="avatar__icon" />
      </div> */}
      <RemoveTask remove={remove} index={i} />
      <div className="task-item__info">
        <h3 className="info__heading">{task[i].title}</h3>
        <p className="info__time">{task[i].date}</p>
      </div>
      <FaRegBell className="task-item__alarm" />
    </animated.li>
  ));
};

export default Tasks;
