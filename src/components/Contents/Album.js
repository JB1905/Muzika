import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import ContentHeader from '../ContentHeader';
import Title from '../Title';
import { ArtistLink } from '../Links';
import Info from '../Info';

const Album = ({ value, children }) => (
  <>
    <Container className="container--sm">
      <aside>
        <img
          className="artwork"
          src={value.artworkUrl100.replace('100x100', '400x400')}
          alt=""
        />
      </aside>
    </Container>

    <Container className="container--md">
      <ContentHeader type="album">
        <Title
          title={value.collectionName}
          explicit={value.collectionExplicitness}
        />

        <ArtistLink value={value} />
        <Info value={value} />
      </ContentHeader>

      {children}

      <div className="copyright">{value.copyright}</div>
    </Container>
  </>
);

Album.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    collectionExplicitness: PropTypes.string.isRequired,
    copyright: PropTypes.string
  }),

  children: PropTypes.node
};

export default Album;
