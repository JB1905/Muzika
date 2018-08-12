import React from 'react';
import { Link } from 'react-router-dom';

export const VideoList = ({ value }) => {
  const video = value.trackName
    .toLowerCase()
    .replace(/[¿@#$%^&/|*?"'`]/g, '')
    .replace(/ /g, '+');

  return (
    <div className="videos__list">
      <div className="video__img">
        <img src={value.artworkUrl100.replace('100x100', '500x500')} alt="" />
      </div>

      <div className="desc">
        <p className="index">{value.trackNumber}.</p>

        <Link
          className="link list__link--video"
          to={`/music-video/${video}/${value.trackId}`}>
          {value.trackName}
        </Link>

        <span className={value.trackExplicitness} />
      </div>
    </div>
  );
};
