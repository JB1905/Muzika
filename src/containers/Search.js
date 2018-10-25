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
    const term = this.props.location.search.replace('?q=', '');

    this.setState({ title: term });

    search({ term, entity: 'song', limit: 15 }).then(data =>
      this.setState({ songs: data.results })
    );

    search({ term, entity: 'album', limit: 20 }).then(data =>
      this.setState({ albums: data.results })
    );

    search({ term, entity: 'musicVideo', limit: 12 }).then(data =>
      this.setState({ videos: data.results })
    );
  }

  render() {
    const { title, songs, albums, videos } = this.state;

    return (
      <>
        <HeaderTitle>
          <h2>Results for: "{title}"</h2>
        </HeaderTitle>

        {songs ? (
          <SearchList
            {...this.props}
            values={songs}
            className="scroller--songs"
            type="Songs"
          />
        ) : (
          <Preloader />
        )}

        {albums ? (
          <SearchList
            {...this.props}
            values={albums}
            className="scroller--albums"
            type="Albums"
          />
        ) : (
          <Preloader />
        )}

        {videos ? (
          <SearchList
            {...this.props}
            values={videos}
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
