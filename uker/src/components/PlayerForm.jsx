import React from 'react'
import { useState } from 'react';
import '../styles/PlayerForm.css';

function PlayerForm({players, addPlayer, closeAddPlayerModal}) {

    const [playerName, setPlayerName] = useState('');

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page reload on submit
        addPlayer(playerName);
        setPlayerName(''); 
    };

    return (
        <>
            <div className="players-list">
                <div className='players-list-header'>
                    <h1>Players List</h1>
                    <button className='close-window-btn' onClick={closeAddPlayerModal}>X</button>
                </div>
                <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter player name" 
                    className="player-form"
                    value={playerName}
                    onChange={handleInputChange}
                />
                <button type="submit" className='submit-btn'>Submit</button>
                </form>
                
                {players.map((player, index) => (
                    <div key={index} className='players-list-item'>
                        {player.name}
                    </div>
                ))}
            </div>
        </>
      );
}

export default PlayerForm
