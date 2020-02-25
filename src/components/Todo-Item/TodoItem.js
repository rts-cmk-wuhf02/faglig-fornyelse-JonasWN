import React from 'react';
import './TodoItem.scss'

const TodoItem = () => {
    return (
        <ul className="todo-list">
            <li className="todo-list__todo-item">
                <h3 className="todo-item__title">Workout</h3>  
                <span className="todo-item__remove">-</span>
            </li>
            <li className="todo-list__todo-item">
                <h3 className="todo-item__title">Workout</h3>  
                <span className="todo-item__remove">-</span>
            </li>
            <li className="todo-list__todo-item">
                <h3 className="todo-item__title">Workout</h3>  
                <span className="todo-item__remove">-</span>
            </li>
        </ul>
    )
}

export default TodoItem