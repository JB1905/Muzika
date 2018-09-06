import React from 'react';
import { Link } from 'react-router-dom';

import { SongItem, AlbumItem, VideoItem } from '../ListItems';

export const SearchList = ({ values, type, location }) => {
  if (values.length > 0) {
    const data = values.map((value, index) => {
      if (value.kind === 'song') {
        return <SongItem key={index} value={value} />;
      } else if (value.collectionType === 'Album') {
        return <AlbumItem key={index} value={value} />;
      } else if (value.kind === 'music-video') {
        return <VideoItem key={index} value={value} />;
      }

      return false;
    });

    return (
      <div className="grid">
        <div className="inline">
          <h3 className="grid__title">{type}</h3>

          <Link
            to={`/${type.toLowerCase().replace(' ', '-')}${location.search}`}>
            <p className="link more">Show more...</p>
          </Link>
        </div>

        <div className="scrollable">
          <div className="container--horizontal">{data}</div>
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="grid error">
          <div className="inline">
            <h3 className="grid__title">{type} not found!</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
};