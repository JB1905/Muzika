import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

const Artist = ({ value, type, list }) => (
  <p className="artist__info">
    {type !== 'list' ? <span>By:&nbsp;</span> : null}
    {value.artistViewUrl ? (
      <Link
        className={`link ${
          !list ? 'content__link--artist' : 'list__link--artist'
        }`}
        to={`/artist/${queryString(value.artistName)}/${value.artistId}`}
      >
        {value.artistName}
      </Link>
    ) : (
      <span style={type === 'list' ? { fontSize: 13 } : null}>
        {value.artistName}
      </span>
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
