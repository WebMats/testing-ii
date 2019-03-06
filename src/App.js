import React, { useState } from 'react';
import './App.css';

const players = [
  { name: 'player1', balls:0, strikes:0 },
  { name: 'player2', balls:0, strikes:0 },
  { name: 'player3', balls:0, strikes:0 },
  { name: 'player4', balls:0, strikes:0 },
]

const app = () => {
    const [playersList, setPlayersList] = useState([...players])
    const [playerAtBat, setPlayerAtBat] = useState(null)

    const detectChangesFromDashboard = (field, action) => {
      const updatedplayersList = [...playersList];
      updatedplayersList[playerAtBat][field] = action.payload
      setPlayersList(updatedplayersList)
    }

    return (
      <div className="App">
      </div>
    );
}

export default app;
