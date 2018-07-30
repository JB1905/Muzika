import React, { Component } from 'react';
//import Delay from 'react-delay';
//import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { video } from '../../api';

export default class Video extends Component {
  state = {
    data: false
  };

  componentDidMount() {
    video('u2', res => this.setState({ data: res }));
  }

  render() {
    return (
      <React.Fragment>{!this.state.data ? <Spinner /> : null}</React.Fragment>
    );
  }
}
