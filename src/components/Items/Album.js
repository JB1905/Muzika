import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Inline from '../Inline';
import { ListLink } from '../Links';

import { queryString } from '../../helpers';

const Album = ({ value }) => (
  <div className="item--album">
    <div className="primary--album">
      <img
        className="img--album"
        src={value.artworkUrl100.replace('100x100', '200x200')}
        alt=""
      />
    </div>

    <div className="secondary--album">
      <Inline>
        <ListLink
          list="album"
          name={value.collectionName}
          id={value.collectionId}
          explicit={value.collectionExplicitness}
          type="album"
        />
      </Inline>

      <Link
        className="link list__link--artist"
        to={`/artist/${queryString(value.artistName)}/${value.artistId}`}
      >
        {value.artistName}
      </Link>
    </div>
  </div>
);

Album.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionExplicitness: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistId: PropTypes.string.isRequired
  })
};

export default Album;
