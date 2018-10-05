import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const ArtistLink = ({ value }) => (
  <p>
    By:{' '}
    <Link
      className="link content__link--artist"
      to={`/artist/${queryString(value.artistName)}/${value.artistId}`}
    >
      {value.artistName}
    </Link>
  </p>
);

ArtistLink.propTypes = {
  value: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    artistId: PropTypes.number.isRequired
  })
};
