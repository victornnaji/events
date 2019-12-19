import React from 'react';
import "./Dashboard.scss";
import { IActivity } from '../../models/activities';


interface IProp {
    activities : IActivity[];
}

var bg = "assets/blob-shape.svg";


const Dashboard: React.FC<IProp> = ({activities}) => {
    return (
        <div className="dashboard" style={{backgroundImage: `url(${bg})`}}>
            <div className="dashboard-container">
               <div className="container">
                {activities.map((activity) =>  (
                        <li>{activity.description}</li>
                    ))}
               </div>
            </div>
        </div>
    )
}

export default Dashboard;
