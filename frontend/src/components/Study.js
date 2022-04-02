import React, { useState, useEffect } from 'react';
import Clock from './Clock';
import Image from 'react-bootstrap/Image';
import beats from '../sounds/beats.mp3';
import muse from '../apis/muse';

const Study = () => {
  // Data we get from the muse (Focused or not focused)
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    getFocused();
  }, [focused]);

  const getFocused = async () => {
    const response = await muse.get('/focus');
    setFocused(response.data.state);
  };

  return (
    <div>
      <Clock />
      <h4 className="text-center">{focused ? 'Focused' : 'Not Focused'}</h4>
      <div className="text-center">
        <Image
          src="./lofiMuse.jpg"
          className="fluid rounded thumbnail shadow-2-strong"
          alt="LoFi Muse"
          style={{ maxWidth: '27rem' }}
        ></Image>
      </div>
    </div>
  );
};

export default Study;
