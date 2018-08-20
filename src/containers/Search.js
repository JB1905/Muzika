import React, { Component } from 'react';

import { Spinner } from '../components/Spinner';
import { SearchList } from '../components/Lists';
import { search } from '../api';

export default class Search extends Component {
  state = {
    title: '',
    songs: <Spinner />,
    albums: <Spinner />,
    videos: <Spinner />
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.location.search !== nextProps.location.search) {
      return true;
    }
    if (this.state.songs !== nextState.songs) {
      return true;
    }
    return false;
  }

  componentDidMount = () => this.results();
  componentDidUpdate = () => this.results();

  results() {
    const query = this.props.location.search.replace('?q=', '');

    search({ term: query, entity: 'song', limit: 12 }).then(data => {
      const songs = (
        <SearchList {...this.props} values={data.results} type="Songs" />
      );

      this.setState({ songs: songs });
    });

    search({ term: query, entity: 'album', limit: 16 }).then(data => {
      const albums = (
        <SearchList {...this.props} values={data.results} type="Albums" />
      );

      this.setState({ albums: albums });
    });

    search({ term: query, entity: 'musicVideo', limit: 8 }).then(data => {
      const videos = (
        <SearchList {...this.props} values={data.results} type="Music videos" />
      );

      this.setState({ videos: videos });
    });

    this.setState({ title: query });
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
