import React from 'react';
import { Link } from 'react-router-dom';

import { SongItem, AlbumItem, VideoItem } from '../ListItems';

export const SearchList = ({ values, type, location }) => {
  if (values.length > 0) {
    const data = values.map((value, index) => {
      let list;

      if (value.kind === 'song') {
        list = <SongItem key={index} value={value} />;
      } else if (value.collectionType === 'Album') {
        list = <AlbumItem key={index} value={value} />;
      } else if (value.kind === 'music-video') {
        list = <VideoItem key={index} value={value} />;
      }

      return list;
    });

    return (
      <React.Fragment>
        <div className="inline">
          <h3 className="grid__title">{type}</h3>

          <Link
            to={`/${type.toLowerCase().replace(' ', '-')}${location.search}`}>
            <p className="link more">Show more...</p>
          </Link>
        </div>

        <div className="grid">
          <div className="container--horizontal">{data}</div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="grid">
          <h3 className="grid__title">{type} not found!</h3>
        </div>
      </React.Fragment>
    );
  }
};
