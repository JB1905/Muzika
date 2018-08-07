import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';
import { Song, Video, Album } from '../../components/Lists';
import { artist, listSongs, listAlbums, listVideos } from '../../api';

import './Artist.css';

export default class Artist extends Component {
  state = { artist: null, songs: null, videos: null, albums: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    artist(id, res => this.setState({ artist: res.data }));

    listSongs(id, res => {
      const songs = res.data.map(
        value => (value.kind === 'song' ? <Song value={value} /> : null)
      );

      this.setState({ songs: songs });
    });

    listAlbums(id, res => {
      const albums = res.data.map(
        value =>
          value.collectionType === 'Album' ? <Album value={value} /> : null
      );

      this.setState({ albums: albums });
    });

    listVideos(id, res => {
      const videos = res.data.map(
        value => (value.kind === 'music-video' ? <Video value={value} /> : null)
      );

      this.setState({ videos: videos });
    });
  }

  render() {
    return this.state.artist ? (
      <React.Fragment>
        <div className="artist">
          <h2>{this.state.artist[0].artistName}</h2>
        </div>

        {this.state.songs ? (
          <div className="grid">
            <h3 className="grid__title">Songs</h3>

            {/*<Link to={`/`}>
              <p>Show more...</p>
            </Link>*/}

            <div className="songs__container">{this.state.songs}</div>
          </div>
        ) : (
          <Spinner />
        )}

        {this.state.albums ? (
          <div className="grid">
            <h3 className="grid__title">Albums</h3>

            {/*<Link to={`/`}>
              <p>Show more...</p>
            </Link>*/}

            <div className="albums__container">{this.state.albums}</div>
          </div>
        ) : (
          <Spinner />
        )}

        {this.state.videos ? (
          <div className="grid">
            <h3 className="grid__title">Videos</h3>

            {/*<Link to={`/`}>
              <p>Show more...</p>
            </Link>*/}

            <div className="videos__container">{this.state.videos}</div>
          </div>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    ) : (
      <Spinner />
    );
  }
}
