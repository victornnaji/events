import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import { IActivity } from '../models/activities';


interface IState{
  activities : IActivity[];
}


class App extends Component<{}, IState>  {

  readonly state: IState = {
    activities : [],
  }

  componentDidMount(){
    axios.get<IActivity[]>("http://localhost:5000/api/activities")
    .then((response : any) => {
      console.log(response)
      this.setState({
        activities : response.data
      })
    })
  }


  render(){
    return (
      <div className="App">
        {this.state.activities.map((activity) =>  (
          <li>{activity.description}</li>
        ))}
      </div>
    );
  }
  
}

export default App;
