import React, { Component } from 'react';

import Preloader from '../../components/Preloader';
import View from '../../components/View';
import { SongContent } from '../../components/Contents';
import Lyrics from '../../components/Lyrics';

import { song, lyrics } from '../../api';

export default class Song extends Component {
  state = { song: null, lyrics: null, error: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    song(id).then(data => {
      this.setState({ song: data.results[0] });

      lyrics(data.results[0].artistName, data.results[0].trackName).then(data =>
        this.setState({ lyrics: data.lyrics, error: data.error })
      );
    });
  }

  render() {
    return this.state.song ? (
      <View className="song">
        <SongContent value={this.state.song}>
          <Lyrics error={this.state.error} content={this.state.lyrics} />
        </SongContent>
      </View>
    ) : (
      <Preloader />
    );
  }
}
