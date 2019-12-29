import React, { useState, useEffect } from 'react';
import './App.scss';
import Navbar from '../features/nav/Navbar';
import Home from './Home/Home';
//@ts-ignore 
import {Route, Switch} from "react-router-dom";
import ActivityDetails from './ActivityDetails/ActivityDetails';
import { IActivity } from '.././models/activities';
import axios from "axios";


const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);

    const HandleSelectAcivity = (id: string) => {
        setSelectedActivity(activities.filter(activity => activity.id === id)[0]);
    };

    useEffect(() => {
        axios.get<IActivity[]>("http://localhost:5000/api/activities")
        .then((response : any) => {
        setActivities(response.data)
        })
    }, []);


  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => 
        <Home activities={activities} 
        selectActivity={HandleSelectAcivity}
        selectedActivity={selectedActivity}/>} 
        />
        <Route exact path="/activity/:activityId" render={() => <ActivityDetails activity={selectedActivity!}/>} />
      </Switch> 
    </div>
  );
  
  
}

export default App;
