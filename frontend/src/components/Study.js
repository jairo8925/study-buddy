import React, { useState, useEffect, useCallback, useRef } from 'react';
import Task from './Task';
import { Button, Image } from 'react-bootstrap';
import muse from '../apis/muse';
import './Study.css';

const Study = ({ task, duration, onFinish }) => {
  // Data we get from the muse (Focused or not focused)
  const [focused, setFocused] = useState(false);
  const [paused, setPaused] = useState(true);
  const beats = useRef(new Audio('beats.mp3'));

  const callMuse = useCallback(async () => {
    const response = await muse.get('/focus');
    setFocused(response.data.state);
  }, []);

  useEffect(() => {
    callMuse();
    const interval = setInterval(() => callMuse(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [callMuse]);

  const onTaskFinish = () => {
    onFinish();
  };

  const onBeatsClick = () => {
    setPaused(!paused);
    paused ? beats.current.play() : beats.current.pause();
  };

  return (
    <div style={{ marginTop: '35px' }}>
      <h4 className="text-center">
        you are currently{' '}
        <b className={focused ? 'focused' : 'distracted'}>
          {focused ? 'focused' : 'not focused'}
        </b>
      </h4>
      <div className="text-center">
        <Image
          src="./lofiMuse.jpg"
          className="fluid rounded shadow-2-strong"
          alt="LoFi Muse"
          style={{
            maxWidth: '27rem',
            marginBottom: '13px',
            marginTop: '8px',
          }}
        ></Image>
        <Task task={task} duration={duration} onTaskFinish={onTaskFinish} />
        <Button
          variant={paused ? 'outline-secondary' : 'secondary'}
          onClick={onBeatsClick}
        >
          {paused ? 'get focused' : 'stop the sound'}
        </Button>
      </div>
    </div>
  );
};

export default Study;
