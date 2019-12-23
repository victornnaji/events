import React from 'react';
import "./ActivityDetails.scss";

const ActivityDetails = (props : any) => {
    return (
        <div className="activity-container">
           <div className="container">
              welcome to activity details-
              {props.match.params.activityId}
           </div>
        </div>
    )
}

export default ActivityDetails;
