import React, { useState } from 'react'
import Title from "../components/Title"
import { TableStyle } from "./TableStyle"
import Tasks from "./Tasks"
import NewTask from './NewTask'

const TaskTrackerApp = () => {
    const [newTask, setNewTask] = useState({
        date: "",
        type: "",
        completed: "",
    })

    const handleChangeDate = (e) => {
        setNewTask({
            ...newTask,
            date: e.target.value,
        })
    }

    const handleChangeType = (e) => {
        setNewTask({
            ...newTask,
            type: e.target.value,
        })
    } 

    let tasks = [{date: "", type: ""}]
    const [taskList, setTaskList] = useState(tasks)

    const addNewTask = () => {
        setTaskList([...taskList, {date: newTask.date, type: newTask.type}])
        setNewTask({
            date: "",
            type: "",
            completed: "",
        })
    }

    const handleCompleted = (e) => {
        e.target.classList.toggle("completed")
    }

    const handleDelete = (e) => {
        window.confirm("Are you sure you want to delete this task ?") && e.target.parentElement.remove()
    } 

  return (
    <>
      <Title text={"Task Tracker"} classes={"title text-center"} />
      <TableStyle>
        <ul className="table-head">
            <li>Date</li>
            <li>Task</li>
        </ul>

        <Tasks 
            date={newTask.date} 
            setDate={handleChangeDate}
            type={newTask.type}
            setType={handleChangeType}
            onClick={addNewTask}
        />

        <ul className="table-row">
            {taskList.map((ts, index) => {
                return ts.date !== "" && ts.type !== ""
                ? <NewTask key={index} date={ts.date} type={ts.type} onTaskClick={handleCompleted} onDelete={handleDelete}/> : null
        })}
        </ul>
      </TableStyle>
    </>
  )
}

export default TaskTrackerApp
