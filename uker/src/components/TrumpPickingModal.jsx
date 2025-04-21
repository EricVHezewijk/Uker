import React from 'react'
import '../styles/TrumpPickingModal.css'

function TrumpPickingModal({setPickingTrumpModal}) {

    function yesClicked() {
        setPickingTrumpModal(false);
    }

    function noClicked() {
        setPickingTrumpModal(false);
    }

  return (
    <div className='trump-picking-modal-wrapper'>
      <h2>{`Player 1, do you want the dealer to pick up the trump card?`}</h2>
      <div className="button-wrapper">
        <button className='trump-picking-btn yes' onClick={yesClicked}>Yes</button>
        <button className='trump-picking-btn no' onClick={noClicked}>No</button>
      </div>
    </div>
  )
}

export default TrumpPickingModal
