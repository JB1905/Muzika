import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import Title from '../Title';
import { AlbumLink, ArtistLink } from '../Links';
import AudioPlayer from '../AudioPlayer';
import Info from '../Info';

export const SongContent = ({ value, children }) => (
  <>
    <Container className="container--sm">
      <aside>
        <img
          className="artwork content__artwork"
          src={value.artworkUrl100.replace('100x100', '400x400')}
          alt=""
        />

        {value.previewUrl ? <AudioPlayer src={value.previewUrl} /> : null}
      </aside>
    </Container>

    <Container className="container--md">
      <div className="content__header">
        <Title title={value.trackName} explicit={value.trackExplicitness} />
        <AlbumLink value={value} />
        <ArtistLink value={value} />
        <Info value={value} />
      </div>

      {children}
    </Container>
  </>
);

SongContent.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    previewUrl: PropTypes.string,
    trackName: PropTypes.string.isRequired,
    trackExplicitness: PropTypes.string.isRequired
  }),

  children: PropTypes.object
};
