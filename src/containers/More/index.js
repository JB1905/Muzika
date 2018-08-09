import React, { Component } from 'react';

import { Spinner } from '../../components/Spinner';
import { SongItem, AlbumItem, VideoItem } from '../../components/Items';
import { search, list } from '../../api';

import './More.css';

export default class More extends Component {
  state = { artist: null, list: null };

  componentDidMount() {
    const { id, type } = this.props.match.params;

    let entity;

    if (type === 'songs') entity = 'song';
    else if (type === 'albums') entity = 'album';
    else if (type === 'music-videos') entity = 'musicVideo';

    list({ id: id, entity: entity, limit: 100 }, res => {
      const list = res.data.map(item => {
        if (item.kind === 'song') {
          return <SongItem value={item} />;
        }

        if (item.collectionType === 'Album') {
          return <AlbumItem value={item} />;
        }

        if (item.kind === 'music-video') {
          return <VideoItem value={item} />;
        }
      });

      this.setState({ artist: res.data[0].artistName, list: list });
    });
  }

  render() {
    return this.state.artist ? (
      <React.Fragment>
        <div className="artist">
          <h2>Albums by: {this.state.artist}</h2>
        </div>

        <div className="grid grid--vertical">
          <div className="albums__container">{this.state.list}</div>
        </div>
      </React.Fragment>
    ) : (
      <Spinner />
    );
  }
}
