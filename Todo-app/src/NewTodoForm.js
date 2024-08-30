import react, {useState} from 'react';
import {v4 as uuid} from 'uuid';

function NewTodoForm({createTask}) {
    const [task, setTask] = useState("");

    const handleChange = evt => {
        setTask(evt.target.value);
    }

    const handleInput = evt => {
        evt.preventDefault();
        createTask({task, id:uuid()});
        setTask("")
        
    }
    return(
        <div onSubmit={handleInput}>
            <form>
                <label>Todo:</label>
                <input
                placeholder='Enter a todo.'
                id='task'
                name='task'
                type='text'
                onChange={handleChange}
                value={task}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewTodoForm;