import React, { Component } from 'react';

import { Spinner } from '../components/Spinner';
import { ArtistList } from '../components/Lists';
import { artist, list } from '../api';

export default class Artist extends Component {
  state = { artist: null, songs: null, albums: null, videos: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    artist(id).then(data => this.setState({ artist: data.results[0] }));

    list({ id: id, entity: 'song', limit: 12 }).then(data =>
      this.setState({ songs: data.results })
    );

    list({ id: id, entity: 'album', limit: 16 }).then(data =>
      this.setState({ albums: data.results })
    );

    list({ id: id, entity: 'musicVideo', limit: 8 }).then(data =>
      this.setState({ videos: data.results })
    );
  }

  render() {
    return (
      <React.Fragment>
        <div className="header__title">
          <h2>{this.state.artist ? this.state.artist.artistName : null}</h2>
        </div>

        {this.state.songs ? (
          <ArtistList {...this.props} values={this.state.songs} type="Songs" />
        ) : (
          <Spinner />
        )}

        {this.state.albums ? (
          <ArtistList
            {...this.props}
            values={this.state.albums}
            type="Albums"
          />
        ) : (
          <Spinner />
        )}

        {this.state.videos ? (
          <ArtistList
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
