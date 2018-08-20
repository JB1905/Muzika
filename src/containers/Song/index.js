import React, { Component } from 'react';

import { SongContent } from '../../components/Contents';
import { Spinner } from '../../components/Spinner';
import { song, lyrics } from '../../api';

import './Song.css';

export default class Song extends Component {
  state = { song: null, lyrics: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    song(id).then(data => {
      this.setState({ song: data.results[0] });

      lyrics(data.results[0].artistName, data.results[0].trackName).then(data =>
        this.setState({ lyrics: data.lyrics })
      );
    });
  }

  render() {
    return this.state.song ? (
      <div className="song">
        <SongContent value={this.state.song}>
          <div className="lyrics">
            {this.state.lyrics ? (
              this.state.lyrics.split('\n').map((item, index) => (
                <span key={index}>
                  {item}
                  <br />
                </span>
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </SongContent>
      </div>
    ) : (
      <Spinner />
    );
  }
}
