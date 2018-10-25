import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Inline from '../Inline';
import { ListLink } from '../Links';

import { queryString } from '../../helpers';

const Song = ({ value }) => (
  <div className="item--song">
    <section className="primary--song">
      <img className="img--song" src={value.artworkUrl60} alt="" />
    </section>

    <section className="secondary--song">
      <Inline>
        <ListLink
          list="song"
          name={value.trackName}
          id={value.trackId}
          explicit={value.trackExplicitness}
          type="song"
        />
      </Inline>

      <Link
        className="link list__link--album"
        to={`/album/${queryString(value.collectionName)}/${value.collectionId}`}
      >
        {value.collectionName} &bull; {value.releaseDate.substring(0, 4)}
      </Link>
    </section>
  </div>
);

Song.propTypes = {
  value: PropTypes.shape({
    artworkUrl60: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    trackExplicitness: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    releaseDate: PropTypes.string.isRequired
  })
};

export default Song;
