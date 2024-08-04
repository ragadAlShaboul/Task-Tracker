import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [completed, setCompleted] = useState(false);
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add a task');
            return;
        }

        onAdd({ text, day, completed, description });

        setText('');
        setDay('');
        setCompleted(false);
        setDescription('')
    };

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder="Add Task"
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input 
                    type='text' 
                    placeholder="Add Day & Time"
                    value={day} 
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Description</label>
                <input 
                    type='text' 
                    placeholder="Description"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Completed</label>
                <input 
                    type='checkbox' 
                    checked={completed}
                    onChange={(e) => setCompleted(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value='Save Task' className="btn btn-block"/>
        </form>
    );
}

export default AddTask;
