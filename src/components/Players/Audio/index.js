import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Audio.scss';

export default function Audio({ src }) {
  const [play, setPlay] = useState(false);

  const player = useRef(null);

  useEffect(() => {
    player.current.addEventListener('ended', () => setPlay(false));
  }, []);

  const toggle = () => {
    setPlay(!play);

    play ? player.current.pause() : player.current.play();
  };

  return (
    <>
      <button
        className={`button--play ${play ? 'played' : ''}`}
        onClick={toggle}
      >
        {play ? (
          <FontAwesomeIcon icon="pause" />
        ) : (
          <FontAwesomeIcon icon="play" />
        )}
      </button>

      <audio src={src} ref={player} />
    </>
  );
}

Audio.propTypes = {
  src: PropTypes.string.isRequired
};
