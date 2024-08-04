import { useState } from "react";

const EditTask = ({task, onEdit}) => {

    const [text, setText] = useState(task.text);
    const [day, setDay] = useState(task.day);
    const [completed, setCompleted] = useState(task.completed);
    const [description, setDescription] = useState('');


    const onSubmit=(e)=>{
        e.preventDefault();

        if(!text){
            alert('please add task')
            return
        }

        onEdit({ _id:task._id ,text, day, completed,description})

        setText('')
        setDay('')
        setCompleted(false)
        setDescription('')

    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Edit</label>
        <input 
        type='text' 
        placeholder={task.text}
        value={text} 
        onChange={(e)=>{
            setText(e.target.value)
        }}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input 
        type='text' 
        placeholder={task.day}
        value={day} 
        onChange={(e)=>{
            setDay(e.target.value)
            }}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
          <input 
            type='text' 
            placeholder={task.description}
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
          />
      </div>
      <div className="form-control 
      form-control-check">
        <label>Set Completed</label>
        <input 
        type='checkbox' 
        value={completed} 
        checked={completed}
        onChange={(e)=>{
            setCompleted(e.currentTarget.checked)
            }} 
        />

      </div>
      <input type="submit" value='Save Task'
      className="btn btn-block"/>
    </form>
  )
}

export default EditTask
