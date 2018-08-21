import React from 'react';

import { ListLink } from '../Links';

export const VideoList = ({ value }) => (
  <div className="item--video">
    <div className="img--video">
      <img src={value.artworkUrl100.replace('100x100', '450x450')} alt="" />
    </div>

    <div className="inline">
      <p className="index">{value.trackNumber}.</p>

      <ListLink
        list="list__link--video"
        name={value.trackName}
        id={value.trackId}
        explicit={value.trackExplicitness}
        type="music-video"
      />
    </div>
  </div>
);
