import React from 'react';
import PropTypes from 'prop-types';

import Inline from '../Inline';
import { ListLink } from '../Links';

import './SongList.scss';

export const SongList = ({ value }) => (
  <div className="list__item--song">
    <p className="index">{value.trackNumber}.</p>

    <div>
      <Inline>
        <ListLink
          list="list__link--song"
          name={value.trackName}
          id={value.trackId}
          explicit={value.trackExplicitness}
          type="song"
        />
      </Inline>

      <p className="artist">{value.artistName}</p>
    </div>
  </div>
);

SongList.propTypes = {
  value: PropTypes.shape({
    trackNumber: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    trackExplicitness: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired
  }),

  children: PropTypes.array
};
