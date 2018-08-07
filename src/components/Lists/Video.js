import React from 'react';
import { Link } from 'react-router-dom';

export const Video = ({ value }) => {
  const video = value.trackName.toLowerCase().replace(/ /g, '+');
  const artist = value.artistName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="video">
      <div className="video__primary">
        <img
          className="video__img"
          src={value.artworkUrl100.replace('100x100', '200x200')}
          alt=""
        />
      </div>

      <div className="video__secondary">
        <Link to={`/music-video/${video}/${value.trackId}`}>
          <p className="song-link">{value.trackName}</p>
          <div className={value.trackExplicitness} />
        </Link>

        <Link to={`/artist/${artist}/${value.artistId}`}>
          <p className="author-link">{value.artistName}</p>
        </Link>
      </div>
    </div>
  );
};
