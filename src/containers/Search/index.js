import React, { Component } from 'react';
import { Spinner } from '../../components/Spinner';
import { Song, Video, Album } from '../../components/Lists';
import { searchSongs, searchAlbums, searchVideos } from '../../api';

import './Search.css';

export default class Search extends Component {
  state = { songs: null, videos: null, albums: null };

  componentDidMount = () => this.results(this.props.match.params.query);

  results(query) {
    searchSongs(query, res => {
      const songs = res.data.map(value => <Song value={value} />);

      this.setState({ songs: songs });
    });

    searchAlbums(query, res => {
      const albums = res.data.map(value => <Album value={value} />);

      this.setState({ albums: albums });
    });

    searchVideos(query, res => {
      const videos = res.data.map(value => <Video value={value} />);

      this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.songs ? (
          <div className="grid">
            <h3 className="grid__title">Songs</h3>
            <div className="songs__container">{this.state.songs}</div>
          </div>
        ) : (
          <Spinner />
        )}

        {this.state.albums ? (
          <div className="grid">
            <h3 className="grid__title">Albums</h3>
            <div className="albums__container">{this.state.albums}</div>
          </div>
        ) : (
          <Spinner />
        )}

        {this.state.albums ? (
          <div className="grid">
            <h3 className="grid__title">Videos</h3>
            <div className="videos__container">{this.state.videos}</div>
          </div>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}
