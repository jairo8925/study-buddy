import React from 'react';
import { Table, Col } from 'react-bootstrap';

const SummaryList = ({ results }) => {
  const items = (res) => {
    return res.map((task, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{task[0]}</td>
          <td>{task[1]}</td>
          <td>{task[2]}</td>
          <td>{task[3]}</td>
        </tr>
      );
    });
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
        <h5>Tasks Summary</h5>
        <Table striped bordered hover style={{ fontSize: '10px' }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Duration (min)</th>
              <th>Time focused (s)</th>
              <th>Time not focused (s)</th>
            </tr>
          </thead>
          <tbody>{items(results)}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default SummaryList;
