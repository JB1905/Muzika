import React, { Component } from 'react';

import { Spinner } from '../components/Spinner';
import { SearchList } from '../components/Lists';
import { search } from '../api';

export default class Search extends Component {
  state = { title: null, songs: null, albums: null, videos: null };

  componentDidMount = () => this.results();

  componentDidUpdate(prevProps, prevState) {
    if (prevState.title !== this.props.location.search.replace('?q=', ''))
      this.results();
  }

  results() {
    const query = this.props.location.search.replace('?q=', '');

    this.setState({ title: query });

    search({ term: query, entity: 'song', limit: 12 }).then(data =>
      this.setState({ songs: data.results })
    );

    search({ term: query, entity: 'album', limit: 16 }).then(data =>
      this.setState({ albums: data.results })
    );

    search({ term: query, entity: 'musicVideo', limit: 8 }).then(data =>
      this.setState({ videos: data.results })
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="header__title">
          <h2>Results for: "{this.state.title}"</h2>
        </div>

        {this.state.songs ? (
          <SearchList {...this.props} values={this.state.songs} type="Songs" />
        ) : (
          <Spinner />
        )}

        {this.state.albums ? (
          <SearchList
            {...this.props}
            values={this.state.albums}
            type="Albums"
          />
        ) : (
          <Spinner />
        )}

        {this.state.videos ? (
          <SearchList
            {...this.props}
            values={this.state.videos}
            type="Music videos"
          />
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}
