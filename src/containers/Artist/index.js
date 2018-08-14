import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';
import { SongItem, AlbumItem, VideoItem } from '../../components/Items';
import { artist, list } from '../../api';

export default class Artist extends Component {
  state = { artist: null, songs: null, videos: null, albums: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    artist(id, res => this.setState({ artist: res.data }));

    list({ id: id, entity: 'song', limit: 12 }, res => {
      if (typeof res.data === 'object' && res.data.length > 0) {
        const songs = res.data.map(
          (value, index) =>
            value.kind === 'song' ? (
              <SongItem key={index} value={value} />
            ) : null
        );

        this.setState({ songs: songs });
      }
    });

    list({ id: id, entity: 'album', limit: 16 }, res => {
      if (typeof res.data === 'object' && res.data.length > 0) {
        const albums = res.data.map(
          (value, index) =>
            value.collectionType === 'Album' ? (
              <AlbumItem key={index} value={value} />
            ) : null
        );

        this.setState({ albums: albums });
      }
    });

    list({ id: id, entity: 'musicVideo', limit: 8 }, res => {
      if (typeof res.data === 'object' && res.data.length > 0) {
        const videos = res.data.map(
          (value, index) =>
            value.kind === 'music-video' ? (
              <VideoItem key={index} value={value} />
            ) : null
        );

        this.setState({ videos: videos });
      }
    });
  }

  render() {
    return this.state.artist ? (
      <React.Fragment>
        <div className="header__title">
          <h2>{this.state.artist[0].artistName}</h2>
        </div>

        {this.state.songs ? (
          <React.Fragment>
            <div className="inline">
              <h3 className="grid__title">Songs</h3>

              <Link
                to={`/artist/${this.state.artist[0].artistName
                  .toLowerCase()
                  .replace(/[¿@#$%^&/|*?"'`]/g, '')
                  .replace(/ /g, '+')}/${this.state.artist[0].artistId}/songs`}>
                <p className="link more">Show more...</p>
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
                to={`/artist/${this.state.artist[0].artistName
                  .toLowerCase()
                  .replace(/[¿@#$%^&/|*?"'`]/g, '')
                  .replace(/ /g, '+')}/${
                  this.state.artist[0].artistId
                }/albums`}>
                <p className="link more">Show more...</p>
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
              <h3 className="grid__title">Music videos</h3>

              <Link
                to={`/artist/${this.state.artist[0].artistName
                  .toLowerCase()
                  .replace(/[¿@#$%^&/|*?"'`]/g, '')
                  .replace(/ /g, '+')}/${
                  this.state.artist[0].artistId
                }/music-videos`}>
                <p className="link more">Show more...</p>
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
