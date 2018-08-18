import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';
import AudioPlayer from '../Player/AudioPlayer';

export const SongContent = ({ value, children }) => {
  const album = value.collectionName ? queryString(value.collectionName) : null;
  const artist = queryString(value.artistName);

  return (
    <React.Fragment>
      <div className="container container--sm">
        <aside>
          <img
            className="artwork content__artwork"
            src={value.artworkUrl100.replace('100x100', '400x400')}
            alt=""
          />

          <AudioPlayer src={value.previewUrl} />
        </aside>
      </div>

      <div className="container container--md">
        <div className="content__header">
          <div className="inline">
            <h2 className="title title--song">{value.trackName}</h2>
            <span className={value.trackExplicitness} />
          </div>

          <p>
            <Link
              className="link content__link--album"
              to={`/album/${album}/${value.collectionId}`}>
              {value.collectionName}
            </Link>
          </p>

          <p>
            By:{' '}
            <Link
              className="link content__link--artist"
              to={`/artist/${artist}/${value.artistId}`}>
              {value.artistName}
            </Link>
          </p>

          <p className="about about--song">
            {value.primaryGenreName} &bull; {value.releaseDate.substring(0, 4)}
          </p>
        </div>

        {children}
      </div>
    </React.Fragment>
  );
};
