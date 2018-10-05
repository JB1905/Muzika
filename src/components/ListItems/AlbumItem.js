import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';
import { ListLink } from '../Links';

export const AlbumItem = ({ value }) => (
  <div className="item--album">
    <section className="primary--album">
      <img
        className="img--album"
        src={value.artworkUrl100.replace('100x100', '200x200')}
        alt=""
      />
    </section>

    <section className="secondary--album">
      <div className="inline">
        <ListLink
          list="list__link--album"
          name={value.collectionName}
          id={value.collectionId}
          explicit={value.collectionExplicitness}
          type="album"
        />
      </div>

      <Link
        className="link list__link--artist"
        to={`/artist/${queryString(value.artistName)}/${value.artistId}`}
      >
        {value.artistName}
      </Link>
    </section>
  </div>
);

AlbumItem.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionExplicitness: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistId: PropTypes.number.isRequired
  })
};
