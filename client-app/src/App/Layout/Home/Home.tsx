import React from 'react';
import Hero from '../../features/Hero/Hero';
import Dashboard from '../dashboard/Dashboard';
import "./Home.scss";
import { IActivity } from '../../models/activities';

interface IProp{
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
}

const Home:React.FC<IProp> = ({activities, selectActivity, selectedActivity}) => {
    return (
        <div className="home">
            <Hero/>
            <Dashboard activities={activities} 
            selectActivity ={selectActivity}
            selectedActivity={selectedActivity}
            />
        </div>
    )
}

export default Home;
