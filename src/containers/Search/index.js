import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';
import { SongItem, AlbumItem, VideoItem } from '../../components/Items';
import { search } from '../../api';

import './Search.css';

export default class Search extends Component {
  state = { songs: null, videos: null, albums: null };

  componentDidMount = () =>
    this.results(this.props.location.search.replace('?q=', ''));

  componentWillReceiveProps(newProps) {
    if (
      newProps.value !== this.props.history.location.search.replace('?q=', '')
    ) {
      this.props.history.push(`/search?q=${newProps.value}`);
      this.results(newProps.value);
    }
  }

  results(query) {
    search({ term: query, entity: 'song', limit: 12 }, res => {
      if (typeof res.data === 'object' && res.data.length > 0) {
        const songs = res.data.map(value => <SongItem value={value} />);

        this.setState({ songs: songs });
      } else {
        this.setState({ songs: null });
      }
    });

    search({ term: query, entity: 'album', limit: 16 }, res => {
      if (typeof res.data === 'object' && res.data.length > 0) {
        const albums = res.data.map(value => <AlbumItem value={value} />);

        this.setState({ albums: albums });
      } else {
        this.setState({ songs: null });
      }
    });

    search({ term: query, entity: 'musicVideo', limit: 8 }, res => {
      if (typeof res.data === 'object' && res.data.length > 0) {
        const videos = res.data.map(value => <VideoItem value={value} />);

        this.setState({ videos: videos });
      } else {
        this.setState({ songs: null });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="header__title">
          <h2>Results for: {this.props.location.search.replace('?q=', '')}</h2>
        </div>

        {this.state.songs ? (
          <React.Fragment>
            <div className="inline">
              <h3 className="grid__title">Songs</h3>

              <Link to={`/search${this.props.location.search}&type=songs`}>
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

              <Link to={`/search${this.props.location.search}&type=albums`}>
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
                to={`/search${this.props.location.search}&type=music-videos`}>
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
    );
  }
}
