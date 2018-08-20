import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const AlbumLink = ({ value }) => (
  <p>
    <Link
      className="link content__link--album"
      to={`/album/${queryString(value.collectionName)}/${value.collectionId}`}>
      {value.collectionName}
    </Link>
  </p>
);
