import React, { Component } from 'react';

import Preloader from '../components/Preloader';
import HeaderTitle from '../components/HeaderTitle';
import { SearchList } from '../components/Lists';

import { search } from '../api';

export default class Search extends Component {
  state = { title: null, songs: null, albums: null, videos: null };

  componentDidMount = () => this.results();

  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== this.props.location.search.replace('?q=', '')) {
      this.results();
    }
  }

  results() {
    const query = this.props.location.search.replace('?q=', '');

    this.setState({ title: query });

    search({ term: query, entity: 'song', limit: 15 }).then(data =>
      this.setState({ songs: data.results })
    );

    search({ term: query, entity: 'album', limit: 20 }).then(data =>
      this.setState({ albums: data.results })
    );

    search({ term: query, entity: 'musicVideo', limit: 12 }).then(data =>
      this.setState({ videos: data.results })
    );
  }

  render() {
    return (
      <>
        <HeaderTitle>
          <h2>Results for: "{this.state.title}"</h2>
        </HeaderTitle>

        {this.state.songs ? (
          <SearchList
            {...this.props}
            values={this.state.songs}
            className="scroller--songs"
            type="Songs"
          />
        ) : (
          <Preloader />
        )}

        {this.state.albums ? (
          <SearchList
            {...this.props}
            values={this.state.albums}
            className="scroller--albums"
            type="Albums"
          />
        ) : (
          <Preloader />
        )}

        {this.state.videos ? (
          <SearchList
            {...this.props}
            values={this.state.videos}
            className="scroller--videos"
            type="Music videos"
          />
        ) : (
          <Preloader />
        )}
      </>
    );
  }
}
