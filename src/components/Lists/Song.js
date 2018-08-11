import React from 'react';
import { Link } from 'react-router-dom';

export const SongList = ({ value }) => {
  const song = value.trackName
    .toLowerCase()
    .replace(/[¿@#$%^&/|*?"'`]/g, '')
    .replace(/ /g, '+');

  return (
    <div className="list__item">
      <p className="index">{value.trackNumber}.</p>

      <audio ref={el => (this.el = el)} preload="false">
        <source src={value.previewUrl} />
      </audio>

      <div className="part">
        <Link
          className="link list__link--song"
          to={`/song/${song}/${value.trackId}`}>
          {value.trackName}
          <span className={value.trackExplicitness} />
        </Link>

        <p className="list__artist">{value.artistName}</p>
      </div>
    </div>
  );
};
