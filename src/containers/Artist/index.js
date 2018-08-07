import React, { Component } from 'react';
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
    const { artist } = this.state;

    return (
      <React.Fragment>
        {artist ? (
          <React.Fragment>
            <div className="artist">
              <div className="container-small">
                <img
                  className="artist-pic"
                  src="https://www.tekstowo.pl/zdjecie_wykonawcy,green_day,Z3JlZW5fZGF5XzE0XzZmNzJjZDJjXzI1MDQ2Mg.._800_600_.jpg"
                  alt="img"
                />
              </div>

              <div className="container-middle">
                <h2>{artist[0].artistName}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ut ligula a sapien elementum aliquam. Orci varius
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Fusce efficitur imperdiet lectus eu dapibus.
                  Suspendisse hendrerit erat sit amet ligula porta, a porta nisi
                  luctus. In hac habitasse platea dictumst. Sed congue elit in
                  hendrerit imperdiet. Suspendisse facilisis metus sed urna
                  mollis, vel porta eros volutpat.{' '}
                </p>
                <br />

                <p>
                  Vestibulum ultricies a leo et imperdiet. Suspendisse potenti.
                  Phasellus sit amet tempor nisi. Vivamus ante purus, lobortis
                  sit amet ex a, luctus vehicula leo. Nam urna libero, iaculis
                  at eros sit amet, feugiat tempus nisl. Integer eu lacinia
                  eros. Suspendisse ac condimentum nunc, non ultricies sem.
                  Curabitur ultrices ante ac tincidunt suscipit. Integer
                  vestibulum consectetur arcu a pulvinar. Vestibulum non posuere
                  massa.{' '}
                </p>
              </div>
            </div>

            <div className="container-full">
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
            </div>
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}
