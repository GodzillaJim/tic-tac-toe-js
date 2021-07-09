import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = (props) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    props.names(player1, player2);
  };
  const handleChange = (e) => {
    let player = e.target.id;
    if (player === 'player1') {
      return setPlayer1(e.target.value);
    }
    return setPlayer2(e.target.value);
  };
  return (
    <div className='wrapper'>
      <div className='screen'>
        <Form>
          <Form.Group>
            <Form.Label>Name Player1</Form.Label>
            <Form.Control type='name' id='player1' onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name Player2</Form.Label>
            <Form.Control type='name' id='player2' onChange={handleChange} />
          </Form.Group>
          <Button type='button' variant='primary' onClick={handleClick}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
