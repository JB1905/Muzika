import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import ContentHeader from '../ContentHeader';
import Title from '../Title';
import { AlbumLink, ArtistLink } from '../Links';
import { AudioPlayer } from '../Players';
import Info from '../Info';

const Song = ({ value, children }) => (
  <>
    <Container className="container--sm">
      <aside>
        <div className="artwork">
          <img src={value.artworkUrl100.replace('100x100', '400x400')} alt="" />
        </div>

        {value.previewUrl ? <AudioPlayer src={value.previewUrl} /> : null}
      </aside>
    </Container>

    <Container className="container--md">
      <ContentHeader type="song">
        <Title title={value.trackName} explicit={value.trackExplicitness} />
        <AlbumLink value={value} />
        <ArtistLink value={value} />
        <Info value={value} />
      </ContentHeader>

      {children}
    </Container>
  </>
);

Song.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    previewUrl: PropTypes.string,
    trackName: PropTypes.string.isRequired,
    trackExplicitness: PropTypes.string.isRequired
  }),

  children: PropTypes.node
};

export default Song;
