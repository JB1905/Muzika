import React, { Component } from 'react';

import { Spinner } from '../components/Spinner';
import { ArtistList } from '../components/Lists';
import { artist, list } from '../api';

export default class Artist extends Component {
  state = {
    artist: null,
    songs: <Spinner />,
    videos: <Spinner />,
    albums: <Spinner />
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    artist(id, res => this.setState({ artist: res.data[0] }));

    list({ id: id, entity: 'song', limit: 12 }, res => {
      const songs = (
        <ArtistList {...this.props} values={res.data} type="Songs" />
      );

      this.setState({ songs: songs });
    });

    list({ id: id, entity: 'album', limit: 16 }, res => {
      const albums = (
        <ArtistList {...this.props} values={res.data} type="Albums" />
      );

      this.setState({ albums: albums });
    });

    list({ id: id, entity: 'musicVideo', limit: 8 }, res => {
      const videos = (
        <ArtistList {...this.props} values={res.data} type="Music videos" />
      );

      this.setState({ videos: videos });
    });
  }

  render() {
    return this.state.artist ? (
      <React.Fragment>
        <div className="header__title">
          <h2>{this.state.artist.artistName}</h2>
        </div>
        {this.state.songs} {this.state.albums} {this.state.videos}
      </React.Fragment>
    ) : (
      <Spinner />
    );
  }
}
