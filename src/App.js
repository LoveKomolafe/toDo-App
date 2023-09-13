import React, { useState } from 'react';
import './style.css';



export default function App() {
  const [todo, setToDo] = useState()
  const [todos, setToDos] = useState([
    {name: 'Buy Rice'},
    {name: 'Buy Beans'},
    {name: 'Buy Pepper'},
    {name: 'Buy Fish'}
  ])


  const addToDo = () => {
    console.log('I was clicked');
     console.log(todos);
    
    setToDos([...todos, { name: todo }]);
    
  };

  const handleChange = (event) => {
    // console.log('=======>', event.target.value)
    setToDo(event.target.value)
  }
  
  const deleteToDo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setToDos(newTodos);
  }

  return (
    <div>
      <input type="text" value={todo} onChange={handleChange}/>
      <button onClick={addToDo} >addToDo</button>

      <div>
        {todos.map((todo, index) => (
          <div>
            {todo.name}
            <button className="delete" onClick={deleteToDo} >Delete</button>
          </div>
        ))}
      </div> 
    </div>
  );
}
