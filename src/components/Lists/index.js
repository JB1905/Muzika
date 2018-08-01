import React from 'react';
import { Link } from 'react-router-dom';

import './Lists.css';

export const Track = ({ value }) => {
  const song = value.trackName.toLowerCase().replace(/ /g, '+');
  const album = value.collectionName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="track">
      <div className="track__primary">
        <img
          className="track__img"
          src={value.artworkUrl60}
          alt={value.trackName}
        />
        {/*<audio controls className="player" preload="false">
          <source src={value.previewUrl} />
        </audio>*/}
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

export const Video = ({ value }) => {
  const video = value.trackName.toLowerCase().replace(/ /g, '+');
  const artist = value.artistName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="track">
      <div className="track__primary">
        <img
          className="track__img"
          src={value.artworkUrl60}
          alt={value.trackName}
        />
      </div>

      <div className="track__secondary">
        <Link to={`/music-video/${video}/${value.trackId}`}>
          <p className="song-link">{value.trackName}</p>
        </Link>

        <Link to={`/artist/${artist}/${value.artistId}`}>
          <p className="author-link">{value.artistName}</p>
        </Link>

        <div className={value.trackExplicitness} />
      </div>
    </div>
  );
};

export const Collection = ({ value }) => {
  const artist = value.artistName.toLowerCase().replace(/ /g, '+');
  const album = value.collectionName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="collection">
      <div className="collection__primary">
        <img
          className="collection__img"
          src={value.artworkUrl100}
          alt={value.trackName}
        />
      </div>

      <div className="collection__secondary">
        <Link to={`/album/${album}/${value.collectionId}`}>
          <p className="album-link">{value.collectionName}</p>
        </Link>

        <Link to={`/artist/${artist}/${value.artistId}`}>
          <p className="author-link">{value.artistName}</p>
        </Link>

        <div className={value.trackExplicitness} />
      </div>
    </div>
  );
};
