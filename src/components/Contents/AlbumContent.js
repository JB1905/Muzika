import React from 'react';

import { ArtistLink } from '../Links';

export const AlbumContent = ({ value, children }) => (
  <React.Fragment>
    <div className="container container--sm">
      <aside>
        <img
          className="artwork"
          src={value[0].artworkUrl100.replace('100x100', '400x400')}
          alt=""
        />
      </aside>
    </div>

    <div className="container container--md">
      <div className="content__header">
        <div className="inline">
          <h2 className="title">{value[0].collectionName}</h2>
          <span className={value[0].collectionExplicitness} />
        </div>

        <ArtistLink value={value[0]} />

        <p className="about about--album">
          {value[0].primaryGenreName} &bull;{' '}
          {value[0].releaseDate.substring(0, 4)}
        </p>
      </div>

      {children}

      <div className="copyright">{value[0].copyright}</div>
    </div>
  </React.Fragment>
);
