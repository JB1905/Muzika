import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const AlbumItem = ({ value }) => {
  const artist = queryString(value.artistName);
  const album = queryString(value.collectionName);

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
          <Link
            className="link list__link--album"
            to={`/album/${album}/${value.collectionId}`}>
            {value.collectionName}
          </Link>

          <span className={value.collectionExplicitness} />
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
