import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const VideoContent = ({ value }) => {
  const album = value.collectionName ? queryString(value.collectionName) : null;
  const artist = queryString(value.artistName);

  return (
    <div className="video">
      <div className="container container--md">
        <video
          controls
          poster={value.artworkUrl100.replace('100x100', '800x800')}>
          <source src={value.previewUrl} type="video/mp4" />
        </video>
      </div>

      <div className="container container--sm">
        <div className="content__header--video">
          <div className="inline">
            <h2 className="title title--video">{value.trackName}</h2>
            <span className={value.trackExplicitness} />
          </div>

          {value.collectionId ? (
            <Link
              className="link content__link--album"
              to={`/album/${album}/${value.collectionId}`}>
              <span>{value.collectionName}</span>
            </Link>
          ) : null}

          <p>
            By:{' '}
            <Link
              className="link content__link--artist"
              to={`/artist/${artist}/${value.artistId}`}>
              {value.artistName}
            </Link>
          </p>

          <p className="about about--video">
            {value.primaryGenreName} &bull; {value.releaseDate.substring(0, 4)}
          </p>
        </div>
      </div>
    </div>
  );
};
