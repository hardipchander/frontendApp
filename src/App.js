import './App.css';
import {Routes, Route} from 'react-router-dom';

//Import Componets/Containers here
import Home from "./Componets/Containers/Home.js";
import AllTasks from './Componets/Containers/AllTasks.js';
import SingleTask from './Componets/Containers/SingleTask';
import EditTask from './Componets/Containers/EditTask.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/tasks" element={<AllTasks/>}/>
        <Route exact path="/tasks/:taskId" element={<SingleTask/>}/>
        <Route exact path="/edittask/:taskId" element={<EditTask/>}/>
      </Routes>   
    </div>
  );
}

export default App;
