import './App.css';
import TaskCard from './components/TaskCard';
import NewTask from './components/NewTask';
import tasks from './list.json';
import React, {useState, useEffect} from 'react';

function App() {
  const [pendingTasks, setPendingTasks] = useState(tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [showForm, setShowForm] = useState(false);
  const [sorted, setSorted] = useState(false);

  const handleDelete = (name) => {
    const updatedTasks = pendingTasks.filter(task => task.name !== name);
    setPendingTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilteredTasks(pendingTasks)
    } else {
      const filtered = pendingTasks.filter(task => task.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setFilteredTasks(filtered)
    }
  }

  const handleNewTask = (task) => {
    const copy = [...pendingTasks];
    copy.unshift(task);
    setPendingTasks(copy);
  }

  const handleUrgency = () => {
    const copy = [...pendingTasks];
    if(sorted) {
      setPendingTasks(copy.sort((a,b) => a.name - b.name));
    } else {
      setPendingTasks(copy.sort((a,b) => b.urgency - a.urgency));
    }
    setSorted(prev => !prev);
    console.log(sorted);
  }

  //updates filteredTasks when new task is added, so new task is showed
  useEffect(() => {
    setFilteredTasks(pendingTasks)
  },[pendingTasks, sorted]);

  return (
    <div className="App">
      <header className="header">
        <h1>To-do List</h1>
        <button className="menu-btn" onClick={() => setShowForm(prev => !prev)}>{showForm ? "Hide form":"+"}</button>
      </header>
      {showForm && <NewTask newTask={handleNewTask}/>}
      <input className="searchBar" placeholder="Buscar" type="text" onChange={(e) => handleSearch(e)}/>
      <button className="menu-btn" onClick={() => handleUrgency()}>{sorted ? "Back to normal":"Show urgent"}</button>
      {filteredTasks.map(task => {
        return <TaskCard key={task.name} task={task} onDelete={handleDelete}/>
      })}
      <br/>
      {filteredTasks.length===0 && <img className="noTasks" src="https://www.onlygfx.com/wp-content/uploads/2019/02/8-chalk-stroke-banner-3.png"/>}
    </div>
  );
}

export default App;
