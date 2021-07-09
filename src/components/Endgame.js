import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Endgame = (props) => {
  const [tied, setTied] = useState('You guys tied');
  const [playerWin, setPlayerWin] = useState(`You win ${this.props.winner} !!`);
  const { winner } = props;
  const handleClick = () => {
    this.props.endGame(false);
  };
  return (
    <div className='wrapper'>
      <div className='screen'>
        <p>{winner === 'Tied' ? tied : playerWin}</p>
        <Button variant='primary' onClick={handleClick}>
          Wanna try again?
        </Button>
      </div>
    </div>
  );
};

export default Endgame;
