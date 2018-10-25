import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { SongItem, AlbumItem, VideoItem } from '../Items';
import Grid from '../Grid';
import Inline from '../Inline';

import { queryString } from '../../helpers';

const Artist = ({ values, type, className }) => {
  if (values.length > 1) {
    const data = values.map((value, index) => {
      if (value.kind === 'song') {
        return <SongItem key={index} value={value} />;
      } else if (value.collectionType === 'Album') {
        return <AlbumItem kind="artist" key={index} value={value} />;
      } else if (value.kind === 'music-video') {
        return (
          <VideoItem
            kind="artist"
            key={index}
            value={value}
            contentList={false}
          />
        );
      }

      return false;
    });

    return (
      <Grid>
        <Inline>
          <h3 className="grid__title">{type}</h3>

          <Link
            to={`/artist/${queryString(values[0].artistName)}/${
              values[0].artistId
            }/${type.toLowerCase().replace(' ', '-')}`}
          >
            <p className="link more">Show more...</p>
          </Link>
        </Inline>

        <div className={`container--horizontal ${className || ''}`}>{data}</div>
      </Grid>
    );
  } else return null;
};

Artist.propTypes = {
  values: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired
};

export default Artist;
