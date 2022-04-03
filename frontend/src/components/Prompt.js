import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import SummaryList from './SummaryList';

const Prompt = ({ onTaskSubmit }) => {
  const onClickSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(e.target[0].value, e.target[1].value);
  };

  return (
    <div
      style={{
        margin: '50px 280px 20px 280px',
        backgroundColor: '#f9f6f2',
        border: '2px solid #434C56',
      }}
    >
      <div style={{ padding: '30px' }}>
        <Form onSubmit={onClickSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>What's your task?</Form.Label>
            <Form.Control type="task" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>How many minutes?</Form.Label>
            <Form.Control type="duration" placeholder="" />
          </Form.Group>
          <Col xs="auto" className="my-1">
            <Button variant="secondary" type="submit">
              Start
            </Button>
          </Col>
        </Form>
      </div>
    </div>
  );
};

export default Prompt;
