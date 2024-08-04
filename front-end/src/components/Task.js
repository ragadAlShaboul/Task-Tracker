import { FaTimes } from "react-icons/fa" 
import { CiEdit } from "react-icons/ci"
import { useState } from "react"

import EditTask from "./EditTask"

const Task = ({ task , onDelete, onToggle, updateTask }) => {
  const [update, setUpdate] = useState(false)

  return (
    <>
   { update ? 
    <EditTask 
    task={task} 
    onEdit={(updatedTask)=>{
      setUpdate(false);
      updateTask(updatedTask);
    }} /> : 
    <div 
    className={`task ${task.completed?'completed':''}`}
    onDoubleClick={()=>onToggle(task._id)}
    >
      <h3>Task: {task.text} 
      <FaTimes 
      style={{color:'red',cursor:'pointer'}} 
      onClick={()=> onDelete(task._id)}
      /> 
      
      </h3>
      <p className="time-edit">Day: {task.day}
      <CiEdit
      onClick={()=>{
        setUpdate(true)
      }}/></p>
      <p className="time-edit">Description: {task.description}</p>
    </div>
    }
    </>
  )
}

export default Task
