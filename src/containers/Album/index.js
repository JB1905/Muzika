import React, { Component } from 'react';

import Spinner from '../../components/Spinner';
import View from '../../components/View';
import { AlbumContent } from '../../components/Contents';
import { SongList } from '../../components/SongList';
import { VideoItem } from '../../components/Items';
import Grid from '../../components/Grid';
import Inline from '../../components/Inline';

import './Album.scss';

import { album } from '../../api';

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
            return videos.push(
              <VideoItem key={index} value={value} contentList={true} />
            );
          }

          return false;
        });

        if (videos.length === 0) videos = null;

        this.setState({ songs, videos });
      }
    });
  }

  render() {
    const { album, songs, videos } = this.state;

    return album ? (
      <View className="album">
        <AlbumContent value={album[0]}>
          {songs}

          {videos ? (
            <Grid>
              <Inline>
                <h3 className="grid__title">Music videos</h3>
              </Inline>

              {videos}
            </Grid>
          ) : null}
        </AlbumContent>
      </View>
    ) : (
      <Spinner />
    );
  }
}
