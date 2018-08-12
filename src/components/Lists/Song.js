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
        <div className="inline">
          <Link
            className="link list__link--song"
            to={`/song/${song}/${value.trackId}`}>
            {value.trackName}
          </Link>
          <span className={value.trackExplicitness} />
        </div>

        <p className="list__artist">{value.artistName}</p>
      </div>
    </div>
  );
};
