import React, {useState, useEffect} from 'react';
import './App.scss';
import axios from "axios";
import { IActivity } from '../models/activities';
import Navbar from '../features/nav/Navbar';



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
      <Navbar />
      {/* {activities.map((activity) =>  (
        <li>{activity.description}</li>
      ))} */}

    </div>
  );
  
  
}

export default App;
