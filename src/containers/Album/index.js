import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { SongList, VideoList } from '../../components/Lists';
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

      let songs = [];
      let videos = [];

      data.map(value => {
        if (value.kind === 'song') songs.push(<SongList value={value} />);
        else if (value.kind === 'music-video')
          videos.push(<VideoList value={value} />);
      });

      if (videos.length === 0) videos = null;

      this.setState({ songs: songs, videos: videos });
    });
  }

  render() {
    const { album, songs, videos } = this.state;

    return album ? (
      <div className="album">
        <div className="container container--sm">
          <img
            className="artwork"
            src={album[0].artworkUrl100.replace('100x100', '400x400')}
            alt=""
          />
        </div>

        <div className="container container--md">
          <div className="content__header">
            <h2 className="title">
              {album[0].collectionName}
              <span className={album[0].collectionExplicitness} />
            </h2>

            <p>
              By:{' '}
              <Link
                className="link content__link--artist"
                to={`/artist/${album[0].artistName
                  .toLowerCase()
                  .replace(/ /g, '+')}/${album[0].artistId}`}>
                {album[0].artistName}
              </Link>
            </p>

            <p className="about about--album">
              {album[0].primaryGenreName} &bull;{' '}
              {album[0].releaseDate.substring(0, 4)}
            </p>
          </div>

          {songs}

          {videos ? (
            <React.Fragment>
              <h3 className="grid__title">Videos</h3>
              <div className="grid">
                <div className="videos__container">{videos}</div>
              </div>
            </React.Fragment>
          ) : null}

          <div className="copyright">{album[0].copyright}</div>
        </div>
      </div>
    ) : (
      <Spinner />
    );
  }
}
