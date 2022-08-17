import './App.css';
import TaskCard from './components/TaskCard';
import tasks from './list.json';
import React, {useState} from 'react';

function App() {
  const [pendingTasks, setPendingTasks] = useState(tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleDelete = (name) => {
    const updatedTasks = pendingTasks.filter(task => task.name !== name);
    setPendingTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>To-do List</h1>
        <button>+</button>
      </header>
      {pendingTasks.map(task => {
        return <TaskCard key={task.name} task={task} onDelete={handleDelete}/>
      })};
    </div>
  );
}

export default App;
