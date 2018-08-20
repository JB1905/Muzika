import React from 'react';

import { Title } from '../Title';
import { AlbumLink, ArtistLink } from '../Links';
import AudioPlayer from '../Player/AudioPlayer';

export const SongContent = ({ value, children }) => (
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
        <Title title={value.trackName} explicit={value.trackExplicitness} />
        <AlbumLink value={value} />
        <ArtistLink value={value} />

        <p className="about about--song">
          {value.primaryGenreName} &bull; {value.releaseDate.substring(0, 4)}
        </p>
      </div>

      {children}
    </div>
  </React.Fragment>
);
