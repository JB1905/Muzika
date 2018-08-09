import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';
import { SongItem, AlbumItem, VideoItem } from '../../components/Items';
import { artist, list } from '../../api';

import './Artist.css';

export default class Artist extends Component {
  state = { artist: null, songs: null, videos: null, albums: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    artist(id, res => this.setState({ artist: res.data }));

    list({ id: id, entity: 'song', limit: 12 }, res => {
      const songs = res.data.map(
        value => (value.kind === 'song' ? <SongItem value={value} /> : null)
      );

      this.setState({ songs: songs });
    });

    list({ id: id, entity: 'album', limit: 16 }, res => {
      const albums = res.data.map(
        value =>
          value.collectionType === 'Album' ? <AlbumItem value={value} /> : null
      );

      this.setState({ albums: albums });
    });

    list({ id: id, entity: 'musicVideo', limit: 8 }, res => {
      const videos = res.data.map(
        value =>
          value.kind === 'music-video' ? <VideoItem value={value} /> : null
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
          <React.Fragment>
            <div className="inline">
              <h3 className="grid__title">Songs</h3>

              <Link
                to={`/artist/${this.state.artist[0].artistName}/${
                  this.state.artist[0].artistId
                }/songs`}>
                <p className="more">Show more...</p>
              </Link>
            </div>

            <div className="grid">
              <div className="songs__container">{this.state.songs}</div>
            </div>
          </React.Fragment>
        ) : (
          <Spinner />
        )}

        {this.state.albums ? (
          <React.Fragment>
            <div className="inline">
              <h3 className="grid__title">Albums</h3>

              <Link
                to={`/artist/${this.state.artist[0].artistName}/${
                  this.state.artist[0].artistId
                }/albums`}>
                <p className="more">Show more...</p>
              </Link>
            </div>

            <div className="grid">
              <div className="albums__container">{this.state.albums}</div>
            </div>
          </React.Fragment>
        ) : (
          <Spinner />
        )}

        {this.state.videos ? (
          <React.Fragment>
            <div className="inline">
              <h3 className="grid__title">Videos</h3>

              <Link
                to={`/artist/${this.state.artist[0].artistName}/${
                  this.state.artist[0].artistId
                }/music-videos`}>
                <p className="more">Show more...</p>
              </Link>
            </div>

            <div className="grid">
              <div className="videos__container">{this.state.videos}</div>
            </div>
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    ) : (
      <Spinner />
    );
  }
}
