import React from 'react'
import '../styles/Board.css'
import PlayerForm from './PlayerForm'
import { useState, useEffect } from 'react'
import Uker from '../logic/Uker'
import PlayerCards from './PlayerCards'
import InsufficientPlayersModal from './InsufficientPlayersModal'
import CenterCards from './CenterCards'
import TrumpPickingModal from './TrumpPickingModal'

function Board() {

  const [gameStarted, setGameStarted] = useState(false);
  const [ukerGame] = useState(() => new Uker());
  const [players, setPlayers] = useState([])
  const [addPlayerModal, setAddPlayerModal] = useState(false)
  const [insufficientPlayers, setInsufficientPlayers] = useState(false);
  const [pickingTrumpModal, setPickingTrumpModal] = useState(false);


  useEffect(() => {
    ukerGame.setPlayersChangedCallback(setPlayers);
  }, [ukerGame]);

  function addPlayer(name) {
    ukerGame.addPlayer(name);
  }

  function openAddPlayerModal() {
    setAddPlayerModal(true);
  }

  function closeAddPlayerModal() {
    setAddPlayerModal(false);
  }

  function gamePrecheck() {
    if (players.length == 4) {
      setInsufficientPlayers(false);
      dealCards();
    } else {
      setInsufficientPlayers(true);
    }
  }

  async function dealCards() {
    setGameStarted(true);
    ukerGame.shuffleDeck();    
    ukerGame.dealToPlayers();
    setPlayers([...ukerGame.players]);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setPickingTrumpModal(true);
  }

  return (
    <div className='board-wrapper'>
        <div className="board">
          {!gameStarted && <button className='deal-btn' onClick={gamePrecheck}>Deal</button>}
          <CenterCards trumpCard={ukerGame.trumpCard || []}/>
          <PlayerCards hand={players[0]?.hand || []}/>
        </div>
        <button className='open-add-player-modal-btn' onClick={openAddPlayerModal}>Players</button>
        {addPlayerModal && <PlayerForm players={players} addPlayer={addPlayer} closeAddPlayerModal={closeAddPlayerModal}/>}
        {insufficientPlayers && <InsufficientPlayersModal setInsufficientPlayers={setInsufficientPlayers} players={players}/>}
        {pickingTrumpModal && <TrumpPickingModal setPickingTrumpModal={setPickingTrumpModal}/>}
    </div>
  )
}

export default Board
