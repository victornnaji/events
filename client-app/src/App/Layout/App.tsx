import React, {Component, useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import { IActivity } from '../models/activities';


const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    axios.get<IActivity[]>("http://localhost:5000/api/activities")
    .then((response : any) => {
      console.log(response)
     setActivities(response.data)
    })
  }, []);

  return (
    <div className="App">
      {activities.map((activity) =>  (
        <li>{activity.description}</li>
      ))}
    </div>
  );
  
  
}

export default App;
