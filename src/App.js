import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('/api/todos').then((response) => {
      setTodos(response.data);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/todos', {
      title,
      description,
    }).then((response) => {
      setTodos([...todos, response.data]);
      setTitle('');
      setDescription('');
    });
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" required />
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description" required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
