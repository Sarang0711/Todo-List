import React, {useState} from "react";
import Task from "./Task";

function App() {
  const [task, setTask] = useState("");
  const [taskList, appendTask] = useState([]);
  
  function handleChange(event) {
    const value = event.target.value;
    setTask(value);
  }
  function addToList() {
    appendTask((prevValue) => {
      return [...prevValue, task];
    })
    setTask("");
  }

  function deleteTask(id) {
    appendTask((prevValue) => {
      return prevValue.filter((task, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} 
        value={task}/>
        <button onClick= {addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          { taskList.map((task, index) => {
            return (
            < Task
               key = {index}
               id = {index}
               text = {task}
               onChecked = {deleteTask}
            /> 
            )
            
          })   }
        </ul>
      </div>
    </div>
  );
}

export default App;

