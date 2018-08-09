import React from 'react';
import { Link } from 'react-router-dom';

export const VideoItem = ({ value }) => {
  const video = value.trackName.toLowerCase().replace(/ /g, '+');
  const artist = value.artistName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="video">
      <section className="video__primary">
        <div className="video__img">
          <img src={value.artworkUrl100.replace('100x100', '200x200')} alt="" />
        </div>
      </section>

      <section className="video__secondary">
        <div className="inline">
          <Link
            className="link list__link--video"
            to={`/music-video/${video}/${value.trackId}`}>
            {value.trackName}
          </Link>

          <span className={value.trackExplicitness} />
        </div>

        <Link
          className="link list__link--artist"
          to={`/artist/${artist}/${value.artistId}`}>
          {value.artistName}
        </Link>
      </section>
    </div>
  );
};
