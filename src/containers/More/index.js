import React, { Component } from 'react';

import { Spinner } from '../../components/Spinner';
import { SongItem, AlbumItem, VideoItem } from '../../components/ListItems';
import { search, list } from '../../api';

import './More.css';

export default class More extends Component {
  state = { title: null, list: null };

  componentDidMount() {
    let type;
    let params;

    if (this.props.location.pathname.includes('artist/') > 0) {
      const { id } = this.props.match.params;
      type = this.props.match.params.type;

      params = this.checkKind(type);

      list({ id: id, entity: params.entity, limit: 100 }).then(data => {
        this.setState({
          title: `${params.kind} by: ${data.results[0].artistName}`
        });

        this.content(data.results);
      });
    } else {
      const query = this.props.history.location.search.replace('?q=', '');
      type = this.props.history.location.pathname.replace('/', '');

      params = this.checkKind(type);

      search({ term: query, entity: params.entity, limit: 100 }).then(data => {
        this.setState({ title: `${params.kind} for query: "${query}"` });

        this.content(data.results);
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
    const list = data.map((item, index) => {
      let items;

      if (item.kind === 'song') items = <SongItem key={index} value={item} />;
      else if (item.collectionType === 'Album')
        items = <AlbumItem key={index} value={item} />;
      else if (item.kind === 'music-video')
        items = <VideoItem key={index} value={item} />;

      return items;
    });

    this.setState({ list: list });
  }

  render() {
    return this.state.list ? (
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
