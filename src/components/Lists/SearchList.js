import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { SongItem, AlbumItem, VideoItem } from '../ListItems';
import Grid from '../Grid';
import Inline from '../Inline';

export const SearchList = ({ values, type, location, className }) => {
  if (values.length > 0) {
    const data = values.map((value, index) => {
      if (value.kind === 'song') {
        return <SongItem key={index} value={value} />;
      } else if (value.collectionType === 'Album') {
        return <AlbumItem key={index} value={value} />;
      } else if (value.kind === 'music-video') {
        return <VideoItem key={index} value={value} contentList={false} />;
      }

      return false;
    });

    return (
      <Grid>
        <Inline>
          <h3 className="grid__title">{type}</h3>

          <Link
            to={`/${type.toLowerCase().replace(' ', '-')}${location.search}`}
          >
            <p className="link more">Show more...</p>
          </Link>
        </Inline>

        <div className={`container--horizontal ${className}`}>{data}</div>
      </Grid>
    );
  } else {
    return (
      <>
        <Grid className="error">
          <Inline>
            <h3 className="grid__title">{type} not found!</h3>
          </Inline>
        </Grid>
      </>
    );
  }
};

SearchList.propTypes = {
  values: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string
  })
};
