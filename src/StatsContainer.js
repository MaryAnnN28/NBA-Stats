import React from 'react';
import './Stats.css'
import Stats from './Stats'

const StatsContainer = ({ teamData }) => {

    return (
      <div>
        <center><table className="nba-stats-table">
          <tbody>

          <tr className="nba-stats-header">
            <th className="team-header">Team Name</th>
            <th className="team-header">GP</th>
            <th className="team-header">W</th>
            <th className="team-header">L</th>
            <th className="team-header">Win%</th>
            <th className="team-header">PTS</th>
            <th className="team-header">FGM</th>
            <th className="team-header">FGA</th>
            <th className="team-header">FG%</th>
            <th className="team-header">3PM</th>
            <th className="team-header">3PA</th>
            <th className="team-header">3P%</th>
            <th className="team-header">FTM</th>
            <th className="team-header">FTA</th>
            <th className="team-header">FT%</th>
            <th className="team-header">AST</th>
            <th className="team-header">TOV</th>
            <th className="team-header">STL</th>
            <th className="team-header">BLK</th>
            <th className="team-header">+/-</th>
          </tr>
        {teamData.map(team => 
           <Stats team={team} key={team.id} />
          )}
          </tbody>
        </table>
        </center>
      </div>
  )
}
export default StatsContainer; 