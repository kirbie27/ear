
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import usa from './usa.png';

function App() {
  return (
    <div className="container" >
      <Routes>
        <Route index Component={Home} />
        <Route path="/home" Component={Home} />
      </Routes>
      <img src={usa} alt="linus" className='pinkbag' />
    </div>

  );
}

export default App;
