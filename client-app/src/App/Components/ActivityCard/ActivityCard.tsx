import React from 'react';
import "./ActivityCard.scss";
import { IActivity } from '../../models/activities';
import Button from '../Button/Button';


interface IProp {
    activity : IActivity;
};

var placeholder = "assets/placeholder.jpg";

const ActivityCard : React.FC<IProp> = ({activity}) => {
    var datetime = dateCheck(activity.date);
    var days = datetime.slice(0, 15);
    var time = timeConvert(datetime.slice(16, 21));

    const clickHandler =(e: any) =>{
        e.preventDefault();
        console.log(activity.title)
    }
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={placeholder} alt="" className="card-img"/>
            </div>
            <div className="card-icons">
                <div className="icon-bg"> <i className="far fa-bookmark card-icon"></i> </div>
                <div className="icon-bg"> <i className="far fa-heart card-icon"></i> </div>
            </div>
            <div className="card-content">
                <div className="date-time">
                    <div className="card-date">{days} </div>
                    <div className="card-date">{time} </div>
                </div>
                <div className="event-title">
                    {activity.title}
                </div>
                <div className="event-desc">
                    {activity.description}
                </div>

                <div className="location-view">
                    <div className="location">
                        <span className="card-icon"><i className="fas fa-map-marker-alt"></i></span>
                        {activity.city}</div>
                    <Button text="View event" size="medium" bgColor="#9370db" onclick={clickHandler}/>
                </div>
            </div>
        </div>
    )

    function dateCheck(date: any){
        let d:any = new Date(date);
        return d.toString()
    }

    function timeConvert(time: string){
        var H = +time.substr(0, 2);
        var h = (H % 12) || 12;
        var ampm = H < 12 ? "AM" : "PM";
        time = h + time.substr(2, 3) + ampm;
        return time;
    }
}

export default ActivityCard;
