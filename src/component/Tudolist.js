import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Tudolist = () => {
  // Input field state
  const [task, setTask] = useState('');
  // Tasks array state
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Handle form submit to add a new task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      const newTasks = [...tasks, task];
      setTasks(newTasks);
      // Save tasks to localStorage
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      // Clear the input field
      setTask('');
    }
  };

  // Handle task removal (Clear all tasks)
  const clearTasks = () => {
    setTasks([]); // Clear state
    localStorage.removeItem('tasks'); // Clear localStorage
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Todo List Application</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={task}
                    placeholder="Enter your task..."
                    onChange={(e) => setTask(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary">
                    Add Task
                  </button>
                </div>
              </form>

              {/* Display tasks */}
              <ul className="list-group mb-3">
                {tasks.map((taskItem, index) => (
                  <li key={index} className="list-group-item">
                    {taskItem}
                  </li>
                ))}
              </ul>

              {/* Clear all tasks */}
              <button className="btn btn-danger w-100" onClick={clearTasks}>
                Clear All Tasks
              </button>
            </div>
            <div className="card-footer text-center">
              &copy; 2024 Todo List. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tudolist;
