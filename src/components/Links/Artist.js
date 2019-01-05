import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

const Artist = ({ value, isList }) => (
  <p className="artist__info">
    {!isList && <span>By:&nbsp;</span>}

    {value.artistViewUrl ? (
      <Link
        className={`link ${
          isList ? 'list__link--artist' : 'content__link--artist'
        }`}
        to={`/artist/${queryString(value.artistName)}/${value.artistId}`}
      >
        {value.artistName}
      </Link>
    ) : (
      <span style={isList && { fontSize: 13 }}>{value.artistName}</span>
    )}
  </p>
);

Artist.propTypes = {
  value: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    artistId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired
  }),
  isList: PropTypes.bool
};

export default Artist;
