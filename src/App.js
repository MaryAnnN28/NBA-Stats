import React, { Component } from 'react';
import './App.css';
import StatsContainer from './StatsContainer'



class App extends Component {
  state = {
    teamData: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/teams")
      .then(resp => resp.json())
      .then((teamData) => this.setState({ teamData })); 
  }; 
  
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <center><h1>NBA Stats</h1></center>
          <StatsContainer teamData={this.state.teamData} />
          
        </div>
        
      </div>
    );
  }
}

export default App;
