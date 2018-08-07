import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Song, Video } from '../../components/Parts';
import { Spinner } from '../../components/Spinner';
import { album } from '../../api';

import './Album.css';

export default class Album extends Component {
  state = { album: null, songs: null, videos: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    album(id, res => {
      const data = res.data;
      this.setState({ album: res.data });

      const songs = [];
      const videos = [];

      data.map(value => {
        if (value.kind === 'song') {
          songs.push(<Song value={value} />);
        } else if (value.kind === 'music-video') {
          videos.push(<Video value={value} />);
        }
      });

      this.setState({ songs: songs, videos: videos });
    });
  }

  render() {
    const { album, songs, videos } = this.state;

    let artist;

    if (album) {
      artist = album[0].artistName.toLowerCase().replace(/ /g, '+');
    }

    return album ? (
      <div className="album">
        <div className="container-small">
          <img
            className="artwork"
            src={album[0].artworkUrl100.replace('100x100', '400x400')}
            alt=""
          />
        </div>

        <div className="container-middle">
          <h2>
            {album[0].collectionName}
            <span className={album[0].collectionExplicitness} />
          </h2>
          <Link to={`/artist/${artist}/${album[0].artistId}`}>
            <h3>{album[0].artistName}</h3>
          </Link>
          <p className="album__about">
            {album[0].primaryGenreName} &bull;{' '}
            {album[0].releaseDate.substring(0, 4)}
          </p>

          {songs}
          {videos}

          <div className="copyright">{album[0].copyright}</div>
        </div>
      </div>
    ) : (
      <Spinner />
    );
  }
}
