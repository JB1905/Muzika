import React from 'react';
import { Link } from 'react-router-dom';

export const Song = ({ value }) => {
  const song = value.trackName.toLowerCase().replace(/ /g, '+');
  const album = value.collectionName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="track">
      <div className="track__primary">
        <img className="track__img" src={value.artworkUrl60} alt="" />
        <audio className="player" preload="false">
          <source src={value.previewUrl} />
        </audio>
      </div>

      <div className="track__secondary">
        <Link to={`/song/${song}/${value.trackId}`}>
          <p className="song-link">{value.trackName}</p>
        </Link>
        <div className={value.trackExplicitness} />

        <Link to={`/album/${album}/${value.collectionId}`}>
          <p className="album-link">
            {value.collectionName} &bull; {value.releaseDate.substring(0, 4)}
          </p>
        </Link>
      </div>
    </div>
  );
};
