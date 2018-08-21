import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';
import { ListLink } from '../Links';

export const VideoItem = ({ value }) => (
  <div className="item--video">
    <section className="primary--video">
      <div className="img--video">
        <img src={value.artworkUrl100.replace('100x100', '200x200')} alt="" />
      </div>
    </section>

    <section className="secondary--video">
      <div className="inline">
        <ListLink
          list="list__link--video"
          name={value.trackName}
          id={value.trackId}
          explicit={value.trackExplicitness}
          type="music-video"
        />
      </div>

      <Link
        className="link list__link--artist"
        to={`/artist/${queryString(value.artistName)}/${value.artistId}`}>
        {value.artistName}
      </Link>
    </section>
  </div>
);
