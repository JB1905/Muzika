import React, { Component } from 'react';

import Preloader from '../components/Preloader';
import View from '../components/View';
import { SongContent } from '../components/Contents';
import Lyrics from '../components/Lyrics';

import { song, lyrics } from '../api';

export default class Song extends Component {
  state = { song: null, lyrics: null, error: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    song(id).then(data => {
      const song = data.results[0];

      this.setState({ song });

      lyrics(song.artistName, song.trackName).then(data =>
        this.setState({ lyrics: data.lyrics, error: data.error })
      );
    });
  }

  render() {
    const { song, lyrics, error } = this.state;

    return song ? (
      <View className="song">
        <SongContent value={song}>
          <Lyrics content={lyrics} error={error} />
        </SongContent>
      </View>
    ) : (
      <Preloader />
    );
  }
}
