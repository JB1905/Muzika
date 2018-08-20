import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';
import { SongItem, AlbumItem, VideoItem } from '../ListItems';

export const ArtistList = ({ values, type, location }) => {
  if (values.length > 1) {
    const data = values.map((value, index) => {
      let list;

      if (value.kind === 'song') list = <SongItem key={index} value={value} />;
      else if (value.collectionType === 'Album')
        list = <AlbumItem key={index} value={value} />;
      else if (value.kind === 'music-video')
        list = <VideoItem key={index} value={value} />;

      return list;
    });

    return (
      <div className="grid">
        <div className="inline">
          <h3 className="grid__title">{type}</h3>

          <Link
            to={`/artist/${queryString(values[0].artistName)}/${
              values[0].artistId
            }/${type.toLowerCase().replace(' ', '-')}`}>
            <p className="link more">Show more...</p>
          </Link>
        </div>

        <div className="scrollable">
          <div className="container--horizontal">{data}</div>
        </div>
      </div>
    );
  } else return null;
};
