import React, { Component } from 'react';

import { Spinner } from '../../components/Spinner';
import { SongItem, AlbumItem, VideoItem } from '../../components/Items';
import { search, list } from '../../api';

import './More.css';

export default class More extends Component {
  state = { title: null, list: null };

  componentDidMount() {
    const { type } = this.props.match.params;

    let entity;
    let kind;

    if (type === 'songs') {
      entity = 'song';
      kind = 'Songs';
    } else if (type === 'albums') {
      entity = 'album';
      kind = 'Albums';
    } else if (type === 'music-videos') {
      entity = 'musicVideo';
      kind = 'Music videos';
    }

    if (this.props.location.pathname.includes('artist/') > 0) {
      const { id } = this.props.match.params;

      list({ id: id, entity: entity, limit: 100 }, res => {
        this.setState({ title: `${kind} by: ${res.data[0].artistName}` });
        this.content(res.data);
      });
    } else if (this.props.location.pathname.includes('search/') > 0) {
      const { query } = this.props.match.params;

      search({ term: query, entity: entity, limit: 100 }, res => {
        this.setState({ title: `${kind} for query: ${query}` });
        this.content(res.data);
      });
    }
  }

  content(data) {
    const list = data.map(item => {
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

    this.setState({ list: list });
  }

  render() {
    return this.state.title ? (
      <React.Fragment>
        <div className="header__title">
          <h2>{this.state.title}</h2>
        </div>

        <div className="grid grid--vertical">
          <div className="container container--vertical">{this.state.list}</div>
        </div>
      </React.Fragment>
    ) : (
      <Spinner />
    );
  }
}
