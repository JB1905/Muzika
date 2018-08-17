import React, { Component } from 'react';

import { Spinner } from '../components/Spinner';
import { List } from '../components/Lists';
import { search } from '../api';

export default class Search extends Component {
  state = {
    title: '',
    songs: <Spinner />,
    albums: <Spinner />,
    videos: <Spinner />
  };

  shouldComponentUpdate(newProps, nextState) {
    return newProps.location.search !== this.props.location.search;
  }

  componentDidMount() {
    const query = this.props.location.search.replace('?q=', '');

    this.setState({ title: query });
    this.results(query);
  }

  componentDidUpdate() {
    const query = this.props.location.search.replace('?q=', '');

    this.setState({ title: query });
    this.results(query);
  }

  results() {
    const query = this.props.location.search.replace('?q=', '');

    search({ term: query, entity: 'song', limit: 12 }, res => {
      const songs = <List {...this.props} values={res.data} type="Songs" />;

      this.setState({ songs: songs });
    });

    search({ term: query, entity: 'album', limit: 16 }, res => {
      const albums = <List {...this.props} values={res.data} type="Albums" />;

      this.setState({ albums: albums });
    });

    search({ term: query, entity: 'musicVideo', limit: 8 }, res => {
      const videos = (
        <List {...this.props} values={res.data} type="Music videos" />
      );

      this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="header__title">
          <h2>Results for: "{this.state.title}"</h2>
        </div>
        {this.state.songs} {this.state.albums} {this.state.videos}
      </React.Fragment>
    );
  }
}
