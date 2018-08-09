import React from 'react';
import { Link } from 'react-router-dom';

export const AlbumItem = ({ value }) => {
  const artist = value.artistName.toLowerCase().replace(/ /g, '+');
  const album = value.collectionName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="collection">
      <div className="collection__primary">
        <img
          className="collection__img"
          src={value.artworkUrl100.replace('100x100', '200x200')}
          alt=""
        />
      </div>

      <div className="collection__secondary">
        <div className="inline">
          <Link
            className="link list__link--album"
            to={`/album/${album}/${value.collectionId}`}>
            {value.collectionName}
          </Link>
          <span className={value.collectionExplicitness} />
        </div>

        <Link
          className="link list__link--artist"
          to={`/artist/${artist}/${value.artistId}`}>
          {value.artistName}
        </Link>

        <div className={value.trackExplicitness} />
      </div>
    </div>
  );
};
