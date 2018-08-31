import React from 'react';

import { Title } from '../Title';
import { ArtistLink } from '../Links';
import { Info } from '../Info';

export const AlbumContent = ({ value, children }) => (
  <React.Fragment>
    <div className="container container--sm">
      <aside>
        <img
          className="artwork"
          src={value.artworkUrl100.replace('100x100', '400x400')}
          alt=""
        />
      </aside>
    </div>

    <div className="container container--md">
      <div className="content__header">
        <Title
          title={value.collectionName}
          explicit={value.collectionExplicitness}
        />

        <ArtistLink value={value} />
        <Info value={value} />
      </div>

      {children}

      <div className="copyright">{value.copyright}</div>
    </div>
  </React.Fragment>
);
