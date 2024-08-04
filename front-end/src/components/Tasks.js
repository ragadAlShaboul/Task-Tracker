import Task from './Task'

const Tasks = ({ tasks , onDelete, onUpdate, onToggle}) => {

  return (
    <div>
      
      {tasks.map((task) => {
        return <Task 
        key={task._id} 
        task={task} 
        onDelete={onDelete}
        updateTask={onUpdate}
        onToggle={onToggle}
        />
      })}
      <p className='comment'>double click tasks to set as completed - green tasks are completed.</p>
    </div>
  )
}

export default Tasks
