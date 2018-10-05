import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';
import { ListLink } from '../Links';

export const VideoItem = ({ value, contentList }) => (
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
      <div className="inline">
        {contentList ? <p className="index">{value.trackNumber}.</p> : null}

        <ListLink
          list="list__link--video"
          name={value.trackName}
          id={value.trackId}
          explicit={value.trackExplicitness}
          type="music-video"
        />
      </div>

      {!contentList ? (
        <Link
          className="link list__link--artist"
          to={`/artist/${queryString(value.artistName)}/${value.artistId}`}
        >
          {value.artistName}
        </Link>
      ) : null}
    </section>
  </div>
);

VideoItem.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    trackExplicitness: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    artistId: PropTypes.number.isRequired
  })
};
