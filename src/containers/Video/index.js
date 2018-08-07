import React, { Component } from 'react';
import { VideoContent } from '../../components/Contents';
import { Spinner } from '../../components/Spinner';
import { video } from '../../api';

import './Video.css';

export default class Video extends Component {
  state = { video: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    video(id, res => {
      const data = res.data[0];
      const video = <VideoContent value={data} />;

      this.setState({ video: video });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.video ? this.state.video : <Spinner />}
      </React.Fragment>
    );
  }
}
