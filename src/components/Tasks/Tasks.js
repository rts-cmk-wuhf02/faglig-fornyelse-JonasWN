import React from "react";
import TaskItem from "../Task-Item/TaskItem.js";

const Tasks = (props) => {

    return props.task.map(item => {
        return <TaskItem key={item.id} task={item}/>
     })

};

export default Tasks;
