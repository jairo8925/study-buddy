import React, { useState, useEffect } from 'react';

const Task = ({ task, duration, onTaskFinish }) => {
  const [time, setTime] = useState(duration);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(time - 1), 60000);
    if (time < 0) {
      setFinished(true);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  if (finished) {
    onTaskFinish();
    return (
      <p className="text-center">
        {task} <br />
        Finished!
      </p>
    );
  }

  return (
    <p className="text-center">
      {task} <br />
      {time} {time !== 1 ? 'minutes' : 'minute'} left
    </p>
  );
};

export default Task;
