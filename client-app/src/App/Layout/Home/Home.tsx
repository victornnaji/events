import React, { useState, useEffect } from 'react';
import Hero from '../../features/Hero/Hero';
import Dashboard from '../dashboard/Dashboard';
import { IActivity } from '../../models/activities';
import axios from "axios";
import "./Home.scss";


const Home = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);

    useEffect(() => {
        axios.get<IActivity[]>("http://localhost:5000/api/activities")
        .then((response : any) => {
        console.log(response)
        setActivities(response.data)
        })
    }, []);

    return (
        <div className="home">
            <Hero/>
            <Dashboard activities={activities} />
        </div>
    )
}

export default Home;
