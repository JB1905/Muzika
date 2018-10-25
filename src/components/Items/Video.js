import React from 'react';
import PropTypes from 'prop-types';

import Inline from '../Inline';
import { ListLink, ArtistLink } from '../Links';

const Video = ({ value, contentList, kind }) => (
  <div className="item--video">
    <section className="primary--video">
      <img
        className="img--video"
        src={
          contentList
            ? value.artworkUrl100.replace('100x100', '450x450')
            : value.artworkUrl100.replace('100x100', '200x200')
        }
        alt=""
      />
    </section>

    <section className="secondary--video">
      <Inline>
        {contentList ? <p className="index">{value.trackNumber}.</p> : null}

        <ListLink
          list="video"
          name={value.trackName}
          id={value.trackId}
          explicit={value.trackExplicitness}
          type="music-video"
        />
      </Inline>

      {!contentList ? (
        kind !== 'artist' ? (
          <ArtistLink value={value} type="list" list={true} />
        ) : (
          <span style={{ fontSize: 13 }}>
            {value.releaseDate.substring(0, 4)}
          </span>
        )
      ) : null}
    </section>
  </div>
);

Video.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    trackExplicitness: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistId: PropTypes.string.isRequired
  })
};

export default Video;
