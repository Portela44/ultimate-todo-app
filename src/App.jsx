import './App.css';
import TaskCard from './components/TaskCard';
import tasks from './list.json';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>To-do List</h1>
        <button>+</button>
      </header>
      {tasks.map(task => {
        return <TaskCard key={task.name} task={task}/>
      })};
    </div>
  );
}

export default App;
