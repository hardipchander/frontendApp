import './App.css';
import {Routes, Route} from 'react-router-dom';

//Import Componets/Pages here
import Home from "./Componets/Home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>   
    </div>
  );
}

export default App;
