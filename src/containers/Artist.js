import React, { Component } from 'react';

import Preloader from '../components/Preloader';
import HeaderTitle from '../components/HeaderTitle';
import { ArtistList } from '../components/Lists';

import { artist, list } from '../api';

export default class Artist extends Component {
  state = { artist: null, songs: null, albums: null, videos: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    artist(id).then(data => this.setState({ artist: data.results[0] }));

    list({ id, entity: 'song', limit: 15 }).then(data =>
      this.setState({ songs: data.results })
    );

    list({ id, entity: 'album', limit: 20 }).then(data =>
      this.setState({ albums: data.results })
    );

    list({ id, entity: 'musicVideo', limit: 12 }).then(data =>
      this.setState({ videos: data.results })
    );
  }

  render() {
    const { artist, songs, albums, videos } = this.state;

    return (
      <>
        <HeaderTitle>
          <h2>{artist ? artist.artistName : null}</h2>
        </HeaderTitle>

        {songs ? (
          <ArtistList values={songs} className="scroller--songs" type="Songs" />
        ) : (
          <Preloader />
        )}

        {albums ? (
          <ArtistList
            values={albums}
            className="scroller--albums"
            type="Albums"
          />
        ) : (
          <Preloader />
        )}

        {videos ? (
          <ArtistList
            values={videos}
            className="scroller--videos"
            type="Music videos"
          />
        ) : (
          <Preloader />
        )}
      </>
    );
  }
}
