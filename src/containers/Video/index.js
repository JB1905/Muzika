import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { musicItems } from '../../api';

export default class Video extends Component {
  state = { data: false };

  componentDidMount() {
    const { id } = this.props.match.params;

    musicItems(id, res => this.setState({ data: res.data[0] }));
  }

  render() {
    const { data } = this.state;

    return <React.Fragment>{data ? <div /> : <Spinner />}</React.Fragment>;
  }
}
