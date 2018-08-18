import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const VideoItem = ({ value }) => {
  const video = queryString(value.trackName);
  const artist = queryString(value.artistName);

  return (
    <div className="item--video">
      <section className="primary--video">
        <div className="img--video">
          <img src={value.artworkUrl100.replace('100x100', '200x200')} alt="" />
        </div>
      </section>

      <section className="secondary--video">
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
