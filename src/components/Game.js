import React, { useState } from 'react';
import Board from './Board';

const Game = ({ userName1, userName2, endGame, handleScore }) => {
  const [player1, setPlayer1] = useState(true);
  const [player2, setPlayer2] = useState(false);
  const [check, setCheck] = useState(true);

  const handleTurn = (firstPlayer, firstBoolean, secondPlayer, secondBoolean) => {
    if (firstPlayer === 'player1') {
      return setPlayer1(firstBoolean);
    }
    return setPlayer2(secondBoolean);
  };
  return (
    <div className='game'>
      <Board
        turn={handleTurn}
        player1={player1}
        player2={player2}
        handleScore={handleScore}
        endGame={endGame}
      />
    </div>
  );
};

export default Game;
