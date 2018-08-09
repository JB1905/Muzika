import React from 'react';
import { Link } from 'react-router-dom';

export const SongItem = ({ value }) => {
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
        <div className="inline">
          <Link
            className="link list__link--song"
            to={`/song/${song}/${value.trackId}`}>
            {value.trackName}
          </Link>
          <div className={value.trackExplicitness} />
        </div>

        <Link
          className="link list__link--album"
          to={`/album/${album}/${value.collectionId}`}>
          {value.collectionName} &bull; {value.releaseDate.substring(0, 4)}
        </Link>
      </div>
    </div>
  );
};
