import React from 'react'
import '../styles/InsufficientPlayersModal.css'

function InsufficientPlayersModal({setInsufficientPlayers, players}) {

    function closeModal() {
        setInsufficientPlayers(false);
    }

  return (
    <div className='insufficient-players-modal-wrapper'>
      <div className='insufficient-players-modal'>
        <h2>{`${players.length}/4`}</h2>
        <p>4 players required to start the game.</p>
        <button className='close-btn' onClick={closeModal}>X</button>
      </div>
      
    </div>
  )
}

export default InsufficientPlayersModal
