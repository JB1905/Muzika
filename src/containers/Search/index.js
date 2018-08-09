import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Spinner';
import { SongItem, AlbumItem, VideoItem } from '../../components/Items';
import { search } from '../../api';

import './Search.css';

export default class Search extends Component {
  state = { songs: null, videos: null, albums: null };

  componentDidMount = () => this.results(this.props.match.params.query);

  /*componentWillReceiveProps(newProps) {
    if (newProps.match.params.query !== this.props.match.params.query) {
    }
  }*/

  results(query) {
    search({ term: query, entity: 'song', limit: 12 }, res => {
      const songs = res.data.map(value => <SongItem value={value} />);

      this.setState({ songs: songs });
    });

    search({ term: query, entity: 'album', limit: 16 }, res => {
      const albums = res.data.map(value => <AlbumItem value={value} />);

      this.setState({ albums: albums });
    });

    search({ term: query, entity: 'musicVideo', limit: 8 }, res => {
      const videos = res.data.map(value => <VideoItem value={value} />);

      this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.songs ? (
          <React.Fragment>
            <div className="inline">
              <h3 className="grid__title">Songs</h3>

              <Link to={`/search/${this.props.match.params.query}/songs`}>
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

              <Link to={`/search/${this.props.match.params.query}/albums`}>
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
              <h3 className="grid__title">Videos</h3>

              <Link
                to={`/search/${this.props.match.params.query}/music-videos`}>
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
