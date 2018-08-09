import React, { Component } from 'react';

import { AlbumContent } from '../../components/Contents';
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
        <AlbumContent value={album}>
          {songs}

          {videos ? (
            <React.Fragment>
              <h3 className="grid__title">Videos</h3>
              <div className="grid">
                <div className="videos__container">{videos}</div>
              </div>
            </React.Fragment>
          ) : null}
        </AlbumContent>
      </div>
    ) : (
      <Spinner />
    );
  }
}
