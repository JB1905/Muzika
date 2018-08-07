import React from 'react';
import { Link } from 'react-router-dom';

export const Video = ({ value }) => {
  const video = value.trackName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="list__item">
      <p className="index">{value.trackNumber}.</p>

      <img className="video__img" src={value.artworkUrl100} alt="" />

      <Link to={`/music-video/${video}/${value.trackId}`}>
        <p className="song-link">{value.trackName}</p>
      </Link>
      
      <div className={value.trackExplicitness} />
    </div>
  );
};
