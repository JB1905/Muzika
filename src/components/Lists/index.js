import React from 'react';
import { Link } from 'react-router-dom';

import './Lists.css';

export const Track = ({ val }) => {
  const song = val.trackName.toLowerCase().replace(/ /g, '+');
  const album = val.collectionName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="track">
      <div className="track__primary">
        <img
          className="track__img"
          src={val.artworkUrl60}
          alt={val.trackName}
        />
        <audio controls className="player" preload="false">
          <source src={val.previewUrl} />
        </audio>
      </div>

      <div className="track__secondary">
        <Link to={`/song/${song}/${val.trackId}`}>
          <p className="song-title">{val.trackName}</p>
        </Link>
        <div className={val.trackExplicitness} />

        <Link to={`/album/${album}/${val.collectionId}`}>
          <p className="album">
            {val.collectionName} &bull; {val.releaseDate.substring(0, 4)}
          </p>
        </Link>
      </div>
    </div>
  );
};

export const Collection = ({ val }) => {
  const artist = val.artistName.toLowerCase().replace(/ /g, '+');
  const album = val.collectionName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="collection">
      <div className="collection__primary">
        <img
          className="collection__img"
          src={val.artworkUrl100}
          alt={val.trackName}
        />
      </div>

      <div className="collection__secondary">
        <Link to={`/album/${album}/${val.collectionId}`}>
          <p className="album">{val.collectionName}</p>
        </Link>

        <Link to={`/artist/${artist}/${val.artistId}`}>
          <p className="author">{val.artistName}</p>
        </Link>

        <div className={val.trackExplicitness} />
      </div>
    </div>
  );
};
