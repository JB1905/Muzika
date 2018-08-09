import React from 'react';
import { Link } from 'react-router-dom';

export const AlbumContent = ({ value }) => {
  const album = value.collectionName
    ? value.collectionName.toLowerCase().replace(/ /g, '+')
    : null;
  const artist = value.artistName.toLowerCase().replace(/ /g, '+');

  return (
    <div className="video">
      <div className="container container--md">
        <video controls>
          <source src={value.previewUrl} type="video/mp4" />
        </video>
      </div>

      <div className="container container--sm">
        <h2>
          {value.trackName}
          <span className={value.trackExplicitness} />
        </h2>

        {value.collectionId ? (
          <div className="content__link--song">
            <Link to={`/album/${album}/${value.collectionId}`}>
              <span>{value.collectionName}</span>
            </Link>
          </div>
        ) : null}

        <Link to={`/artist/${artist}/${value.artistId}`}>
          <h3>{value.artistName}</h3>
        </Link>

        <p>
          {value.primaryGenreName} &bull; {value.releaseDate.substring(0, 4)}
        </p>
      </div>
    </div>
  );
};
