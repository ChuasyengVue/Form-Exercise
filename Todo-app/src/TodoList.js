import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {

    const[todos, setTodos] = useState([]);

    const addTodo = newTodoObj => {
        setTodos(todos => [...todos, newTodoObj]);
    };

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const update = (id, updateTask) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? {...todo, task: updateTask} : todo
            )
        );
    };

    const todoComponents = todos.map( todo => (
        <Todo 
        key={todo.id}
        id={todo.id}
        task={todo.task}
        remove={remove}
        update={update}
        />
    ));

    return(
        <div>
            <NewTodoForm createTask={addTodo}/>
            {todoComponents}
        </div>
    );
}

export default TodoList;