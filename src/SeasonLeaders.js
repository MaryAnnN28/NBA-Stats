import React from 'react';
import './Stats.css'
import Card from 'react-bootstrap/Card'; 

const SeasonLeaders = ({ teamData, above500Teams }) => {

  
  return (
    <div className="season-leaders-content">
      <center><h1>Season Leaders</h1></center>
      {/* <CardDeck> */}
      <center>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Teams Above .500</Card.Title>
            <Card.Text>
              <ul>
                <ol>{above500Teams}</ol>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Teams Above .500</Card.Title>
            <Card.Text>
              <ul>
                <ol>{above500Teams}</ol>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Teams Above .500</Card.Title>
            <Card.Text>
              <ul>
                <ol>{above500Teams}</ol>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      {/* </CardDeck> */}
      </center>
    </div>
    
  )
}; 

export default SeasonLeaders; 