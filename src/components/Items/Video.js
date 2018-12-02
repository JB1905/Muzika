import React from 'react';
import PropTypes from 'prop-types';

import Inline from '../Inline';
import Image from '../Image';
import Index from '../Index';
import { ListLink, ArtistLink } from '../Links';

const Video = ({ value, contentList, isArtist }) => (
  <li className="item--video">
    <section className="primary--video">
      <Image
        className="img--video"
        src={value.artworkUrl100}
        size={contentList ? '450x450' : '200x200'}
      />
    </section>

    <section className="secondary--video">
      <Inline>
        {contentList && <Index trackNumber={value.trackNumber} />}

        <ListLink
          list="video"
          name={value.trackName}
          id={value.trackId}
          explicit={value.trackExplicitness}
          type="music-video"
        />
      </Inline>

      {!contentList &&
        (isArtist ? (
          <span style={{ fontSize: 13 }}>
            {value.releaseDate.substring(0, 4)}
          </span>
        ) : (
          <ArtistLink value={value} isList />
        ))}
    </section>
  </li>
);

Video.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    trackId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
    trackExplicitness: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired
  })
};

export default Video;
