import React, { Component } from 'react';

import Spinner from '../components/Spinner';
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
      <VideoContent value={this.state.video} />
    ) : (
      <Spinner />
    );
  }
}
