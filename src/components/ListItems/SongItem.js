import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const SongItem = ({ value }) => {
  const song = queryString(value.trackName);
  const album = queryString(value.collectionName);

  return (
    <div className="item--song">
      <section className="primary--song">
        <img className="img--song" src={value.artworkUrl60} alt="" />
      </section>

      <section className="secondary--song">
        <div className="inline">
          <Link
            className="link list__link--song"
            to={`/song/${song}/${value.trackId}`}>
            {value.trackName}
          </Link>

          <div className={value.trackExplicitness} />
        </div>

        <Link
          className="link list__link--album"
          to={`/album/${album}/${value.collectionId}`}>
          {value.collectionName} &bull; {value.releaseDate.substring(0, 4)}
        </Link>
      </section>
    </div>
  );
};
