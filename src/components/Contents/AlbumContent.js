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
          src={value[0].artworkUrl100.replace('100x100', '400x400')}
          alt=""
        />
      </aside>
    </div>

    <div className="container container--md">
      <div className="content__header">
        <Title
          title={value[0].collectionName}
          explicit={value[0].collectionExplicitness}
        />

        <ArtistLink value={value[0]} />
        <Info value={value[0]} />
      </div>

      {children}

      <div className="copyright">{value[0].copyright}</div>
    </div>
  </React.Fragment>
);
