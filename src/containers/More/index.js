import React, { Component } from 'react';

import Spinner from '../../components/Spinner';
import HeaderTitle from '../../components/HeaderTitle';
import { SongItem, AlbumItem, VideoItem } from '../../components/Items';
import Grid from '../../components/Grid';
import Container from '../../components/Container';

import './More.scss';

import { search, list } from '../../api';

export default class More extends Component {
  state = { title: null, list: null };

  componentDidMount() {
    let type, params;

    if (this.props.location.pathname.includes('artist/')) {
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
    let entity, kind;

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
      if (item.kind === 'song') {
        return <SongItem key={index} value={item} />;
      } else if (item.collectionType === 'Album') {
        return <AlbumItem key={index} value={item} />;
      } else if (item.kind === 'music-video') {
        return <VideoItem key={index} value={item} contentList={false} />;
      }

      return false;
    });

    this.setState({ list });
  }

  render() {
    return this.state.list ? (
      <>
        <HeaderTitle>
          <h2>{this.state.title}</h2>
        </HeaderTitle>

        <Grid className="grid--vertical">
          <Container className="container--vertical">
            {this.state.list}
          </Container>
        </Grid>
      </>
    ) : (
      <Spinner />
    );
  }
}
