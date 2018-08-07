import React from 'react';
import { Link } from 'react-router-dom';

export const Song = ({ value }) => {
  const song = value.trackName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="list__item">
      <p className="index">{value.trackNumber}.</p>

      <Link to={`/song/${song}/${value.trackId}`}>
        <p className="song-link">{value.trackName}</p>
      </Link>

      <span className={value.trackExplicitness} />
      
      <p>{value.artistName}</p>
    </div>
  );
};
