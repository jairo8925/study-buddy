import React, { useState, useEffect } from 'react';
import Clock from './Clock';
import Task from './Task';
import Image from 'react-bootstrap/Image';
import muse from '../apis/muse';
import './Study.css';

const Study = ({ task, duration, onFinish }) => {
  // Data we get from the muse (Focused or not focused)
  const [focused, setFocused] = useState(true);

  useEffect(() => {
    getFocused();
  });

  const getFocused = () => {
    // TODO: Change the time interval.
    const interval = setInterval(() => callMuse(), 60000);
    return () => {
      clearInterval(interval);
    };
  };

  const callMuse = async () => {
    const response = await muse.get('/focus');
    setFocused(response.data.state);
  };

  const onTaskFinish = () => {
    onFinish();
  };

  return (
    <div>
      <Clock duration={duration} />
      <h4 className="text-center">
        You are currently{' '}
        <span className={focused ? 'focused' : 'distracted'}>
          {focused ? 'focused' : 'not focused'}
        </span>
      </h4>
      <div className="text-center">
        <Task task={task} duration={duration} onTaskFinish={onTaskFinish} />
        <Image
          src="./lofiMuse.jpg"
          className="fluid rounded shadow-2-strong"
          alt="LoFi Muse"
          style={{ maxWidth: '27rem' }}
        ></Image>
      </div>
    </div>
  );
};

export default Study;
