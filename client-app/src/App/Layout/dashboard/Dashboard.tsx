import React from 'react';
import "./Dashboard.scss";
import { IActivity } from '../../models/activities';
import ActivityCard from '../../Components/ActivityCard/ActivityCard';


interface IProp {
    activities : IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
}

const Dashboard: React.FC<IProp> = ({activities, selectActivity, selectedActivity}) => {
    return (
        <div className="dashboard">
            <div className="dashboard-container">
               <div className="container">
                   <div className="activity-title">Activities</div>
                   <div className="grid">
                    {activities.map((activity) =>  (
                        <div key={activity.id}>
                            <ActivityCard activity={activity} 
                            selectActivity={selectActivity} 
                            selectedActivity={selectedActivity}/>
                        </div>
                    ))}
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Dashboard;
