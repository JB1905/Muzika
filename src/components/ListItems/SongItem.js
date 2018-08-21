import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';
import { ListLink } from '../Links';

export const SongItem = ({ value }) => (
  <div className="item--song">
    <section className="primary--song">
      <img className="img--song" src={value.artworkUrl60} alt="" />
    </section>

    <section className="secondary--song">
      <div className="inline">
        <ListLink
          list="list__link--song"
          name={value.trackName}
          id={value.trackId}
          explicit={value.trackExplicitness}
          type="song"
        />
      </div>

      <Link
        className="link list__link--album"
        to={`/album/${queryString(value.collectionName)}/${
          value.collectionId
        }`}>
        {value.collectionName} &bull; {value.releaseDate.substring(0, 4)}
      </Link>
    </section>
  </div>
);
