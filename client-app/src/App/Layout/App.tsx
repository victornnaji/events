import React from 'react';
import './App.scss';
import Navbar from '../features/nav/Navbar';
import Home from './Home/Home';



const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
  
  
}

export default App;
