import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const SongList = ({ value }) => {
  const song = queryString(value.trackName);

  return (
    <div className="list__item--song">
      <p className="index">{value.trackNumber}.</p>

      <div>
        <div className="inline">
          <Link
            className="link list__link--song"
            to={`/song/${song}/${value.trackId}`}>
            {value.trackName}
          </Link>

          <span className={value.trackExplicitness} />
        </div>

        <p className="artist">{value.artistName}</p>
      </div>
    </div>
  );
};
