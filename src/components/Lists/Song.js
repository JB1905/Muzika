import React from 'react';
import { Link } from 'react-router-dom';

export const SongList = ({ value }) => {
  const song = value.trackName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="list__item">
      <p className="index">{value.trackNumber}.</p>

      <Link
        className="link list__link--song"
        to={`/song/${song}/${value.trackId}`}>
        {value.trackName}
      </Link>

      <span className={value.trackExplicitness} />

      <p>{value.artistName}</p>
    </div>
  );
};
