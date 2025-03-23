import React from 'react'
import { NewTaskStyle } from './TableStyle'
import Button from "../components/Button"
import { RiDeleteBin6Fill } from 'react-icons/ri'

const NewTask = ({ type, date, onDelete, onTaskClick  }) => {
  return (
    <NewTaskStyle onClick={onTaskClick}>
        <div>
            <h3>{type}</h3>
            <small className="text-danger">{date}</small>
        </div>
        <Button 
            text={""} 
            icon={<RiDeleteBin6Fill className='text-danger fs-lg' style={{userSelect: 'none', pointerEvents: 'none'}}/>} 
            btnClass={"btn-light btn-sm"} 
            onClick={onDelete}
        />
    </NewTaskStyle>
  )
}

export default NewTask
