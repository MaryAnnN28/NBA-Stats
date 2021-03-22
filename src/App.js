import React, { Component } from 'react';
import StatsTable from './StatsTable'
import SeasonLeaders from './SeasonLeaders'
import './Stats.css'



class App extends Component {
  state = {
    teamData: [],
    sort: "None",
    filter: "All",
    search: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/teams")
      .then(resp => resp.json())
      .then((teamData) => this.setState({ teamData })); 
  }; 
  
  handleSort = (sort) => {
    this.setState({sort})
  }

  handleFilter = (filter) => {
    this.setState({filter})
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  displayTeams = () => {
    let displayTeams = this.state.teamData.filter(team =>
      team.name.toLowerCase().includes(this.state.search.toLowerCase()));
    
    if (this.state.filter !== "All") {
      displayTeams = displayTeams.filter(team => team.team === this.state.filter)
    };
    
    switch (this.state.sort) {
      case "Name":
        return displayTeams.sort((a, b) => a.name > b.name ? 1 : -1)
      case "Name":
        return displayTeams.sort((a, b) => a.name < b.name ? -1 : 1)
      case "None":
        return displayTeams
    }
    return displayTeams
  }



  above500Teams = this.state.teamData.filter((team) => {
    return team.W_Percent >= .500 
  })
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <center><h1>NBA Stats</h1></center>
          <StatsTable
            teamData={this.displayTeams()}
            sort={this.state.sort}
            handleSort={this.handleSort}
            handleFilter={this.handleFilter}
            handleSearch={this.handleSearch}
          />

          <SeasonLeaders
            teamData={this.state.teamData}
            above500Teams={this.above500Teams}
          />
          
        </div>
        
      </div>
    );
  }
}

export default App;
