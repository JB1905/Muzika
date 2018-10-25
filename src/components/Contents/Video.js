import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import { VideoPlayer } from '../Players';
import ContentHeader from '../ContentHeader';
import Title from '../Title';
import { AlbumLink, ArtistLink } from '../Links';
import Info from '../Info';

export const Video = ({ value }) => (
  <>
    <Container className="container--md">
      <VideoPlayer value={value} />
    </Container>

    <Container className="container--sm">
      <ContentHeader type="video" isVideo={true}>
        <Title title={value.trackName} explicit={value.trackExplicitness} />
        {value.collectionId ? <AlbumLink value={value} /> : null}
        <ArtistLink value={value} />
        <Info value={value} />
      </ContentHeader>
    </Container>
  </>
);

Video.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    trackExplicitness: PropTypes.string.isRequired,
    collectionId: PropTypes.number
  })
};

export default Video;
