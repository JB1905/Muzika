import React, { Component } from 'react';

import { AlbumContent } from '../../components/Contents';
import { SongList, VideoList } from '../../components/ContentLists';
import { Spinner } from '../../components/Spinner';
import { album } from '../../api';

import './Album.css';

export default class Album extends Component {
  state = { album: null, songs: null, videos: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    album(id).then(data => {
      if (typeof data.results === 'object' && data.results.length > 0) {
        this.setState({ album: data.results });

        let songs = [];
        let videos = [];

        data.results.map((value, index) => {
          if (value.kind === 'song') {
            return songs.push(<SongList key={index} value={value} />);
          } else if (value.kind === 'music-video') {
            return videos.push(<VideoList key={index} value={value} />);
          }

          return false;
        });

        if (videos.length === 0) videos = null;

        this.setState({ songs: songs, videos: videos });
      }
    });
  }

  render() {
    const { album, songs, videos } = this.state;

    return album ? (
      <div className="album">
        <AlbumContent value={album[0]}>
          {songs}

          {videos ? (
            <React.Fragment>
              <div className="grid">
                <div className="inline">
                  <h3 className="grid__title">Music videos</h3>
                </div>
                <div className="container">{videos}</div>
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
