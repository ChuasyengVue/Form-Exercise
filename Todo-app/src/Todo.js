import React, {useState} from 'react';

function Todo({task, update, remove, id}) {

    const [editTask, setEditTask] = useState(task);
   

    const handleChange = evt => {
        setEditTask(evt.target.value);
    }

    const handleDelete = () => remove(id);

    return(
        <div>
            Task: {task}
            <button onClick={handleChange}>Edit</button>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Todo;