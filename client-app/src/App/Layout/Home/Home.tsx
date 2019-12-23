import React, { useState, useEffect } from 'react';
import Hero from '../../features/Hero/Hero';
import Dashboard from '../dashboard/Dashboard';
import { IActivity } from '../../models/activities';
import axios from "axios";
import "./Home.scss";


const Home = () => {
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
        <div className="home">
            <Hero/>
            <Dashboard activities={activities} 
            selectActivity ={HandleSelectAcivity}
            selectedActivity={selectedActivity}
            />
        </div>
    )
}

export default Home;
