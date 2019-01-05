import React from 'react';
import PropTypes from 'prop-types';

import Inline from '../Inline';
import Image from '../Image';
import { ListLink, ArtistLink } from '../Links';

const Album = ({ value, isArtist }) => (
  <li className="item--album">
    <div className="primary--album">
      <Image className="img--album" src={value.artworkUrl100} size="200x200" />
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

      {isArtist ? (
        <span style={{ fontSize: 13 }}>
          {value.releaseDate.substring(0, 4)}
        </span>
      ) : (
        <ArtistLink value={value} isList />
      )}
    </div>
  </li>
);

Album.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    collectionExplicitness: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired
  })
};

export default Album;
