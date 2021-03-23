import React, { useState } from 'react';
import './Stats.css'
import { Button } from 'react-bootstrap'; 

const StatsTable = ({ teamData, sort, handleSort, handleSearch, handleFilter }) => {

  const [value, setValue] = useState("");

  const teamsAbove500 = teamData.filter((team) => {
    return team.W_Percent 
  })

    return (
      <div>
        <table className="nba-stats-table" width="90%">
          <thead>
            <tr className="nba-stats-header">
              <th className="team-header">
                {/* Team */}
                <Button
                  variant="link"
                  value="Name"
                  checked={sort === "Name"}
                  onClick={(event) => handleSort(event.target.value)}>
                  Team
                  </Button>
                </th>
              
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
          </thead>
            <tbody>
            {teamData.map(team => (
              <tr key={teamData.id}>
                <td className="team-name">{team.name}</td>
                <td>{team.GP}</td>
                <td>{team.W}</td>
                <td>{team.L}</td>
                <td>{team.W_Percent}</td>
                <td>{team.PTS}</td>
                <td>{team.FGM}</td>
                <td>{team.FGA}</td>
                <td>{team.FG_Percent}</td>
                <td>{team.Three_PM}</td>
                <td>{team.Three_PA}</td>
                <td>{team.ThreeP_Percent}</td>
                <td>{team.FTM}</td>
                <td>{team.FTA}</td>
                <td>{team.FT_Percent}</td>
                <td>{team.AST}</td>
                <td>{team.TOV}</td>
                <td>{team.STL}</td>
                <td>{team.BLK}</td>
                <td>{team.Plus_Minus}</td>
              </tr>
            ))}
           {/* <Stats team={team} key={team.id} />
          )} */}
          </tbody>
        </table>
      </div>
  )
}
export default StatsTable; 