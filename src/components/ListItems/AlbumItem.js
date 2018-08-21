import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';
import { ListLink } from '../Links';

export const AlbumItem = ({ value }) => {
  const artist = queryString(value.artistName);

  return (
    <div className="item--album">
      <section className="primary--album">
        <img
          className="img--album"
          src={value.artworkUrl100.replace('100x100', '200x200')}
          alt=""
        />
      </section>

      <section className="secondary--album">
        <div className="inline">
          <ListLink
            list="list__link--album"
            name={value.collectionName}
            id={value.collectionId}
            explicit={value.collectionExplicitness}
            type="album"
          />
        </div>

        <Link
          className="link list__link--artist"
          to={`/artist/${artist}/${value.artistId}`}>
          {value.artistName}
        </Link>

        <div className={value.trackExplicitness} />
      </section>
    </div>
  );
};
