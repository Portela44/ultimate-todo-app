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
  const [doneTasks, setDoneTasks] = useState([]);

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
      setPendingTasks(copy.sort((a,b) => a.image - b.image));
    } else {
      setPendingTasks(copy.sort((a,b) => b.urgency - a.urgency));
    }
    setSorted(prev => !prev);
  }

  //updates filteredTasks when new task is added, so new task is showed
  useEffect(() => {
    setFilteredTasks(pendingTasks)
  },[pendingTasks, sorted]);

  const handleDoneTask = (doneTask, check) => {
    const updatedTasks = pendingTasks.filter(task => task.name !== doneTask.name);
    const updatedDoneTasks = doneTasks.filter(task => task.name !== doneTask.name);
    if(!check) {
      setPendingTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
      const copy = [...doneTasks];
      copy.unshift(doneTask);
      setDoneTasks(copy);
    } else {
      setDoneTasks(updatedDoneTasks);
      setFilteredTasks(updatedTasks);
      const copy = [...pendingTasks];
      copy.unshift(doneTask);
      setPendingTasks(copy);
    }
  }

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
        return <TaskCard key={task.name} task={task} onDelete={handleDelete} onDone={handleDoneTask}/>
      })}
      <br/>
      {filteredTasks.length===0 && <img className="noTasks" src="https://www.onlygfx.com/wp-content/uploads/2019/02/8-chalk-stroke-banner-3.png"/>}
      {doneTasks.length!== 0 && <img className="dividingChalk" src="https://www.onlygfx.com/wp-content/uploads/2019/02/8-chalk-stroke-banner-1.png" alt="dividing chalk line" />}
      {doneTasks.length!== 0 && <h1 className="listTitle">Done List</h1>}
      {doneTasks.length!== 0 && doneTasks.map(task => {
        return <TaskCard key={task.name} task={task} onDelete={handleDelete} onDone={handleDoneTask}/>
      })}
    </div>
  );
}

export default App;
