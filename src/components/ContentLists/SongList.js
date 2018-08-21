import React from 'react';

import { ListLink } from '../Links';

export const SongList = ({ value }) => (
  <div className="list__item--song">
    <p className="index">{value.trackNumber}.</p>

    <div>
      <div className="inline">
        <ListLink
          list="list__link--song"
          name={value.trackName}
          id={value.trackId}
          explicit={value.trackExplicitness}
          type="song"
        />
      </div>

      <p className="artist">{value.artistName}</p>
    </div>
  </div>
);
