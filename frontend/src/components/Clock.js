import { useState, useEffect } from 'react';

const Clock = () => {
  // The current time of the day (locally)
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p className="text-center">
      {time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })}
    </p>
  );
};

export default Clock;
