import React, { Component } from 'react';

import { Spinner } from '../../components/Spinner';
import { SongItem, AlbumItem, VideoItem } from '../../components/Items';
import { search, list } from '../../api';

import './More.css';

export default class More extends Component {
  state = { title: null, list: null };

  componentDidMount() {
    let type;

    if (this.props.location.pathname.includes('artist/') > 0) {
      const { id } = this.props.match.params;
      type = this.props.match.params.type;

      const params = this.checkKind(type);

      list({ id: id, entity: params.entity, limit: 100 }, res => {
        this.setState({
          title: `${params.kind} by: ${res.data[0].artistName}`
        });

        this.content(res.data);
      });
    } else {
      const query = this.props.history.location.search.replace('?q=', '');
      type = this.props.history.location.pathname.replace('/', '');

      const params = this.checkKind(type);

      search({ term: query, entity: params.entity, limit: 100 }, res => {
        this.setState({ title: `${params.kind} for query: "${query}"` });

        this.content(res.data);
      });
    }
  }

  checkKind(type) {
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

    return { entity, kind };
  }

  content(data) {
    const list = data.map(item => {
      if (item.kind === 'song') return <SongItem value={item} />;
      else if (item.collectionType === 'Album')
        return <AlbumItem value={item} />;
      else if (item.kind === 'music-video') return <VideoItem value={item} />;
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
