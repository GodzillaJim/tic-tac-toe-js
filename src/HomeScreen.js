import React, { useState } from 'react';
import Endgame from './components/Endgame';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Game from './components/Game';

const HomeScreen = () => {
  const [ties, setTies] = useState(0);
  const [userName1, setUserName1] = useState('Player1');
  const [userName2, setUserName2] = useState('Player2');
  const [winner, setWinner] = useState('');
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [showLogin, setShowLogin] = useState(true);
  const [showEndgame, setShowEndGame] = useState(false);

  const handleScore = (player) => {
    let win;
    if (player === 'player1') {
      win = userName1;
      setPlayer1(player1 + 1);
    } else if (player === 'player2') {
      win = userName2;
      setPlayer2(player2 + 1);
    } else {
      win = 'tied';
    }
    setWinner(win);
  };
  const handleName = (player1, player2) => {
    setUserName1(player1);
    setUserName2(player2);
    setShowLogin(false);
  };
  const handleEndGame = (input) => {
    setShowEndGame(input);
  };
  return (
    <div className='app'>
      {showEndgame ? (
        <Endgame winner={winner} endGame={this.handleEndGame} />
      ) : null}
      {showLogin ? <Login names={handleName} /> : null}
      <Navbar
        ties={ties}
        userName1={userName1}
        userName2={userName2}
        player1={player1}
        player2={player2}
      />
      <Game
        userName1={userName1}
        userName2={userName2}
        endGame={handleEndGame}
        handleScore={handleScore}
      />
    </div>
  );
};

export default HomeScreen;
