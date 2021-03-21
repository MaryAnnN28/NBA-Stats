import React, { Component } from 'react';
import Stats from './Stats'

class StatsContainer extends Component {
  render() {

    return (
      <div>
        <h2>Stats</h2>
        {
          this.props.teamData.map(team => {
            return <Stats team={team} key={team.id} />
          })
        }
      </div>
    )
  }
}
export default StatsContainer; 