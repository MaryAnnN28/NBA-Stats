import React from 'react';
import './SeasonLeaders.css' 

const SeasonLeaders = ({ teamData }) => {


    return (
      <div className="season-leaders-content">
        <center><h2>Season Leaders</h2></center>
           <center>
          <div className="row">
            
       
            <div class="card">
              <div class="stat-content">
              <h4 class="stat-header">Teams Above .600</h4>
                <ol>
                  {
                    teamData.filter(team => team.W_Percent >= .600)
                    .sort((a, b) => a.W_Percent > b.W_Percent ? -1 : 1)
                    .map(team => <li key={team.id}>{team.name}</li>)
                  }
                </ol>
              </div>
            </div>
            
            <div class="card">
              <div class="stat-content">
              <h4 class="stat-header">Points Per Game</h4>
                <ol>
                  {teamData.sort((a, b) => a.PTS > b.PTS ? -1 : 1).slice(0, 5)
                    .map(team =>
                      <>
                        <table className="stat-leader-top">
                          <td className="stat-leader-team">
                            <li key={team.id}>{team.name}</li>  
                          </td>
                          <td className="stat-leader-value">
                            {team.PTS}       
                          </td>
                        </table>
                    </>   
                  )}
                </ol>
              </div>
            </div>

            <div class="card">
              <div class="stat-content">
              <h4 class="stat-header">Rebounds Per Game</h4>
                <ol>
                  {teamData.sort((a, b) => a.REB > b.REB ? -1 : 1).slice(0, 5)
                    .map(team =>
                      <>
                        <table className="stat-leader-top">
                          <td className="stat-leader-team">
                            <li key={team.id}>{team.name}</li>  
                          </td>
                          <td className="stat-leader-value">
                            {team.REB}       
                          </td>
                        </table>
                    </>   
                  )}
                </ol>
              </div>
            </div>

            <div class="card">
              <div class="stat-content">
              <h4 class="stat-header">Assists Per Game</h4>
                <ol>
                  {teamData.sort((a, b) => a.AST > b.AST ? -1 : 1).slice(0, 5)
                    .map(team =>
                      <>
                        <table className="stat-leader-top">
                          <td className="stat-leader-team">
                            <li key={team.id}>{team.name}</li>  
                          </td>
                          <td className="stat-leader-value">
                            {team.AST}       
                          </td>
                        </table>
                    </>   
                  )}
                </ol>
              </div>
            </div>

            <div class="card">
              <div class="stat-content">
              <h4 class="stat-header">Blocks Per Game</h4>
                <ol>
                  {teamData.sort((a, b) => a.BLK > b.BLK ? -1 : 1).slice(0, 5)
                    .map(team =>
                      <>
                        <table className="stat-leader-top">
                          <td className="stat-leader-team">
                            <li key={team.id}>{team.name}</li>  
                          </td>
                          <td className="stat-leader-value">
                            {team.BLK}       
                          </td>
                        </table>
                    </>   
                  )}
                </ol>
              </div>
            </div>

            <div class="card">
              <div class="stat-content">
              <h4 class="stat-header">Steals Per Game</h4>
                <ol>
                  {teamData.sort((a, b) => a.STL > b.STL ? -1 : 1).slice(0, 5)
                    .map(team =>
                      <>
                        <table className="stat-leader-top">
                          <td className="stat-leader-team">
                            <li key={team.id}>{team.name}</li>  
                          </td>
                          <td className="stat-leader-value">
                            {team.STL}       
                          </td>
                        </table>
                    </>   
                  )}
                </ol>
              </div>
            </div>
       
             
            
            
          </div>
      
        
     
        </center>
      </div>
      
    )
}; 

export default SeasonLeaders; 