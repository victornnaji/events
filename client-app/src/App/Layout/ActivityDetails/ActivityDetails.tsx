import React, { useEffect, useState } from 'react';
import "./ActivityDetails.scss";
import { IActivity } from '../../models/activities';
import axios from "axios";

//@ts-ignore
import {withRouter} from "react-router-dom";

interface IProp{
   activity : IActivity;
   match: any;
}

var placeholder = "assets/placeholder.jpg";

const ActivityDetails: React.FC<IProp> = ({match}) => {
   const [activity, setActivity] = useState<IActivity>();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      axios.get<IActivity>(`http://localhost:5000/api/activities/${match.params.activityId}`)
        .then((response : any) => {
        setActivity(response.data);
        setLoading(false);
        })
   }, [match.params.activityId]);


    return (
        <div className="activity-container">
           <div className="container">
               <div className="activity-image" style={{border: "1px solid red", height:'200px'}}>
                <img src={placeholder} alt="" className="activity-img"/>
               </div>
              {loading ? (<div>loading.....</div>) : 
             <div>
                 {activity?.title}
             </div>
              }

           </div>
        </div>
    )
}

export default withRouter(ActivityDetails);
