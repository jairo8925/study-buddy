import React, { useState } from 'react';
import Prompt from './Prompt';
import Study from './Study';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Clock from './Clock';

const App = () => {
  const [busy, setBusy] = useState(false);
  const [task, setTask] = useState('');
  const [duration, setDuration] = useState('');

  const onFinish = () => {
    setBusy(false);
  };

  const onTaskSubmit = (taskInput, durationInput) => {
    setBusy(true);
    setTask(taskInput);
    setDuration(durationInput);
  };

  return (
    <div
      style={{
        marginTop: '8px',
        fontFamily: 'Bree Serif',
        userSelect: 'none',
        color: '#373737',
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 style={{ fontSize: '27px' }}>study buddy</h1>
          </Col>
          <Col>
            <Clock />
          </Col>
        </Row>
      </Container>
      <hr style={{ color: '#373737', opacity: '100%', marginTop: '5px' }} />
      {busy ? (
        <Study task={task} duration={duration} onFinish={onFinish} />
      ) : (
        <Prompt onTaskSubmit={onTaskSubmit} />
      )}
    </div>
  );
};

export default App;
