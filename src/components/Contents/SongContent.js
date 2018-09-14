import React from 'react';
import PropTypes from 'prop-types';

import { Title } from '../Title';
import { AlbumLink, ArtistLink } from '../Links';
import AudioPlayer from '../AudioPlayer';
import { Info } from '../Info';

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
        <Info value={value} />
      </div>

      {children}
    </div>
  </React.Fragment>
);

SongContent.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    trackExplicitness: PropTypes.string.isRequired
  }),

  children: PropTypes.object
};
