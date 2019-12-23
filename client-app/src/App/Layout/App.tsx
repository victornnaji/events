import React from 'react';
import './App.scss';
import Navbar from '../features/nav/Navbar';
import Home from './Home/Home';
//@ts-ignore 
import {Route, Switch} from "react-router-dom";
import ActivityDetails from './ActivityDetails/ActivityDetails';



const App = () => {
 
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/activity/:activityId" component={ActivityDetails} />
      </Switch> 
    </div>
  );
  
  
}

export default App;
