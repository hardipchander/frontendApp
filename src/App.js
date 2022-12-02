import './App.css';
import {Routes, Route} from 'react-router-dom';

//Import Componets/Pages here
import Home from "./Componets/Home.js";
import AllTasks from './Componets/AllTasks.js';
import SingleTask from './Componets/SingleTask';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tasks" element={<AllTasks/>}/>
        <Route path="/tasks/:taskId" element={<SingleTask/>}/>
      </Routes>   
    </div>
  );
}

export default App;
