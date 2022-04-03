import React, { useState } from 'react';
import Prompt from './Prompt';
import Study from './Study';

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
      style={{ marginTop: '20px', fontFamily: 'Nunito', userSelect: 'none' }}
    >
      <h1 className="text-lg-center">StudyBuddy</h1>
      {busy ? (
        <Study task={task} duration={duration} onFinish={onFinish} />
      ) : (
        <Prompt onTaskSubmit={onTaskSubmit} />
      )}
    </div>
  );
};

export default App;
