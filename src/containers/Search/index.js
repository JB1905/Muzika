import React, { Component } from 'react';
import { Track, Collection } from '../../components/Lists';
import Spinner from '../../components/Spinner';
import { search } from '../../api';

export default class Search extends Component {
  state = { data: false, tracks: null, collections: null };

  componentDidMount = () => this.results(this.props.match.params.query);
  getSnapshotBeforeUpdate = value => this.results(value.match.params.query);

  results(query) {
    search(query, res => {
      this.setState({ data: res.data });
      this.parts();
    });
  }

  parts() {
    const tracks = [];
    const collections = [];

    for (const type of this.state.data) {
      if (type.wrapperType === 'track') tracks.push(type);
      else if (type.wrapperType === 'collection') collections.push(type);
    }

    this.setState({
      tracks: tracks.map(val => <Track val={val} />),
      collections: collections.map(val => <Collection val={val} />)
    });
  }

  render() {
    return this.state.data ? (
      <React.Fragment>
        <div className="tracks">
          <h3 className="tracks__title">Songs</h3>
          <div className="tracks__container">{this.state.tracks}</div>
        </div>
        <div className="collections">
          <h3 className="collections__title">Albums</h3>
          <div className="collections__container">{this.state.collections}</div>
        </div>
      </React.Fragment>
    ) : (
      <Spinner />
    );
  }
}
