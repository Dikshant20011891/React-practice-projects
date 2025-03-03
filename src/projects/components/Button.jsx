import React from 'react'

const Button = ({ text = "Click", btnClass, icon, onClick }) => {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>
        {icon}
        {text}
    </button>
  )
}

export default Button
