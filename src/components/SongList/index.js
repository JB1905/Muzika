import React from 'react';
import PropTypes from 'prop-types';

import Inline from '../Inline';
import Index from '../Index';
import { ListLink } from '../Links';

import './SongList.scss';

export const SongList = ({ value }) => (
  <li className="list__item--song">
    <Index trackNumber={value.trackNumber} />

    <div>
      <Inline>
        <ListLink
          list="song"
          name={value.trackName}
          id={value.trackId}
          explicit={value.trackExplicitness}
          type="song"
        />
      </Inline>

      <p className="artist">{value.artistName}</p>
    </div>
  </li>
);

SongList.propTypes = {
  value: PropTypes.shape({
    trackNumber: PropTypes.number.isRequired,
    trackName: PropTypes.string.isRequired,
    trackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    trackExplicitness: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired
  }),

  children: PropTypes.node
};
