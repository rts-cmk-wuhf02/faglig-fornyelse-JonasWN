import React, { useState } from 'react'
import { FaRegBell } from "react-icons/fa";
import { GoSettings } from "react-icons/go";  

const Input = (props) => {

    const [title, setTitle] = useState("")

    const onSubmit = (e) => {
      e.preventDefault()
      props.addItem(title)
      props.click()
      setTitle("")
    }

    const onChange = (e) => {
      setTitle(e.target.value)
    }

    return (
      <form action="" className={"task-form " + (props.display ? "display" : "")}>
        {/* <input type="text" className="task-form__input" />
        <button type="submit" className="task-form__submit"></button> */}
        <li className="task-list__task-item">
        <div className="task-item__avatar">
        <GoSettings className="avatar__icon" onClick={onSubmit} />
        </div>
        <div className="task-item__info">
          <input className="info__heading task-form__input" onChange={onChange}/>
          <p className="info__time">16:00</p>
        </div>
        <FaRegBell className="task-item__alarm" />
      </li>
      </form>
    )
}

export default Input