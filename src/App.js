import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button>Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;