import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

const Artist = ({ value }) => (
  <p>
    By:{' '}
    {value.artistViewUrl ? (
      <Link
        className="link content__link--artist"
        to={`/artist/${queryString(value.artistName)}/${value.artistId}`}
      >
        {value.artistName}
      </Link>
    ) : (
      value.artistName
    )}
  </p>
);

Artist.propTypes = {
  value: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    artistId: PropTypes.string.isRequired
  })
};

export default Artist;
