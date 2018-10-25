import React from 'react';
import PropTypes from 'prop-types';

import Inline from '../Inline';
import { ListLink, ArtistLink } from '../Links';

const Album = ({ value, kind }) => (
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

      {kind !== 'artist' ? (
        <ArtistLink value={value} type="list" list={true} />
      ) : (
        <span style={{ fontSize: 13 }}>
          {value.releaseDate.substring(0, 4)}
        </span>
      )}
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
