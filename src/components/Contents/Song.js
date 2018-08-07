import React from 'react';
import { Link } from 'react-router-dom';

export const SongContent = ({ value }) => {
  const album = value.collectionName
    ? value.collectionName.toLowerCase().replace(/ /g, '+')
    : null;
  const artist = value.artistName.toLowerCase().replace(/ /g, '+');

  return (
    <React.Fragment>
      <div className="container-small">
        <img
          className="artwork"
          src={value.artworkUrl100.replace('100x100', '600x600')}
          alt=""
        />

        <p className="price">Single Price: {value.trackPrice}$</p>
        <audio className="player" preload="false">
          <source src={value.previewUrl} />
        </audio>
      </div>

      <div className="container-middle">
        <h2>
          {value.trackName}
          <span className={value.trackExplicitness} />
        </h2>

        <div className="song__link">
          Album: &nbsp;
          <Link to={`/album/${album}/${value.collectionId}`}>
            <span>{value.collectionName}</span>
          </Link>
        </div>

        <Link to={`/artist/${artist}/${value.artistId}`}>
          <h3>{value.artistName}</h3>
        </Link>

        <p className="album__about">
          {value.primaryGenreName} &bull; {value.releaseDate.substring(0, 4)}
        </p>
      </div>
    </React.Fragment>
  );
};
