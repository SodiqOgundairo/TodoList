import { useState } from "react";

const Todolist = () => {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Go to work"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if(newTask.trim() !== "")
    setTasks((prevTasks) => ([...prevTasks, newTask]))
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  };

  const moveTaskUp = (index) => {
    if(index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];   
        setTasks(updatedTasks)
    }
  };

  const moveTaskDown = (index) => {
    if(index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];   
      setTasks(updatedTasks)
  }
  };

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={newTask}
        onChange={handleInputChange}
      />

      <button className="add-button" onClick={addTask}>
        Add New Task
      </button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text"> {task} </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete Task
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
             👆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
             👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todolist;
