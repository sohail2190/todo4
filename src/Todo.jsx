import { useState } from 'react'
import './App.css'


function Todo() {

    const [todos, setTodods] = useState([]);
    const [inpValue, setInpValue] = useState('');

    const handleAddTodo = ()=>{
        if(inpValue.trim() !== ''){
            setTodods([...todos, inpValue]);
            setInpValue('');
        }
    };

    const handleInpChange = (e)=>{
        setInpValue(e.target.value)
    };

    const handleDeleteTask = (index)=>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodods(newTodos);
    };
    


  return (
    <div className='main'>
        <h1>Todo List App</h1>
        <input type="text" value={inpValue} onChange={handleInpChange}/>
        <button onClick={handleAddTodo}>Add Task</button>

        
    <ul>
        {todos.map( (todo, index) =>(
            <li key={index}>
                {todo}
                <button onClick={()=>handleDeleteTask(index)}>Delete</button>
            </li>
        ))}
    </ul>

    </div>

  )
}

export default Todo