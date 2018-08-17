import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const VideoList = ({ value }) => {
  const video = queryString(value.trackName);

  return (
    <div className="list__item--video">
      <div className="img--video">
        <img src={value.artworkUrl100.replace('100x100', '500x500')} alt="" />
      </div>

      <div className="inline">
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
