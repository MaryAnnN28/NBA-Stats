import React from 'react';
import './Stats.css'

const Stats = ({ team }) => (
  <>
    <tbody></tbody>
    <tr className="nba-stats-table">
      <td>{team.team}</td>
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
  </>
);

export default Stats; 