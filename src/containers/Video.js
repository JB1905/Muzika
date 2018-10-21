import React, { Component } from 'react';

import Preloader from '../components/Preloader';
import View from '../components/View';
import { VideoContent } from '../components/Contents';

import { video } from '../api';

export default class Video extends Component {
  state = { video: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    video(id).then(data => this.setState({ video: data.results[0] }));
  }

  render() {
    return this.state.video ? (
      <View className="video">
        <VideoContent value={this.state.video} />
      </View>
    ) : (
      <Preloader />
    );
  }
}
