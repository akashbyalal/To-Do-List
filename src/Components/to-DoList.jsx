import { useState } from "react";

function ToDoList(){
  const [tasks,setTask] = useState([]);
  const [newTask,setNewTask] = useState('');
  
  function inputTask(event){
    const Task = event.target.value;
    
    
  }
  function addNewTask(){
    if(newTask !== ""){
      setTask(c=>([...c, newTask]))
    setNewTask('')
    }
    
    
  }
  function DeleteTast(index){
    setTask(c=>c.filter((_,i)=>i!==index));
  }
  function MoveUp(index){
    if(index >0 ){
      const updatedTask = [...tasks];
    [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];;
    setTask(updatedTask);   
    }
    
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addNewTask();
    }
  };
  function MoveDown(index){
    if(index < tasks.length-1 ){
      const updatedTask = [...tasks];
    [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];;
    setTask(updatedTask);   
    }
    
  }

  return(
    <div>
      <div className="To-doTitle">To-Do-List</div>
      <div className="Task-inCont ">
        <input className="Text-Task" type="text" id="newT" onKeyDown={handleKeyPress} value={newTask} onChange={inputTask} placeholder="Enter a New Task..." />
        <button className="Add-Btn" onClick={addNewTask}>Add</button>
      </div>
      <div className="Task-Cont">
        <ol>{tasks.map((Task,index)=>(
          <li className="Task-list" key={index}>
            <span className="Task">{Task}</span>
            <button className="Move-Btn btn" onClick={()=>MoveUp(index)}>↑</button>
            <button className="Move-Btn btn" onClick={()=>MoveDown(index)}>↓</button>
            <button className="Delete-Btn btn" onClick={()=>DeleteTast(index)}>🗑</button>
          </li>
        ))}  
        </ol>
      </div>
    </div>
  )

}
export default ToDoList;