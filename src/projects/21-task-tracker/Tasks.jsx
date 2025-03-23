import React from 'react'
import Button from "../components/Button"

const Tasks = ({ date, setDate, type, setType, onClick}) => {
  return (
    <div 
        className="d-flex"
        style={{
            justifyContent: "space-between",
            borderBottom: "1px solid #666",
            marginBottom: "2rem",
        }}
    >
        <input type="datetime-local" value={date} onChange={setDate} />
        <input type="text" value={type} onChange={setType} placeholder='Specify the task'/>
        <Button text="+ Add" btnClass={"btn-success"} onClick={onClick}/>
    </div>
  )
}

export default Tasks
