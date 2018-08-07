import React from 'react';
import { Link } from 'react-router-dom';

export const Album = ({ value }) => {
  const artist = value.artistName.toLowerCase().replace(/ /g, '+');
  const album = value.collectionName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="collection">
      <div className="collection__primary">
        <img className="collection__img" src={value.artworkUrl100} alt="" />
      </div>

      <div className="collection__secondary">
        <Link to={`/album/${album}/${value.collectionId}`}>
          <p className="album-link">{value.collectionName}</p>
        </Link>

        <Link to={`/artist/${artist}/${value.artistId}`}>
          <p className="author-link">{value.artistName}</p>
        </Link>

        <div className={value.trackExplicitness} />
      </div>
    </div>
  );
};
