import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const ArtistLink = ({ value }) => (
  <p>
    By:{' '}
    <Link
      className="link content__link--artist"
      to={`/artist/${queryString(value.artistName)}/${value.artistId}`}>
      {value.artistName}
    </Link>
  </p>
);
