import React from 'react';

import { Title } from '../Title';
import { AlbumLink, ArtistLink } from '../Links';

export const VideoContent = ({ value }) => (
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
        <Title title={value.trackName} explicit={value.trackExplicitness} />
        {value.collectionId ? <AlbumLink value={value} /> : null}
        <ArtistLink value={value} />

        <p className="about about--video">
          {value.primaryGenreName} &bull; {value.releaseDate.substring(0, 4)}
        </p>
      </div>
    </div>
  </div>
);
