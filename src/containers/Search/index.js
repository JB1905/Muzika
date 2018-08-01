import React, { Component } from 'react';
import { Track, Video, Collection } from '../../components/Lists';
import Spinner from '../../components/Spinner';
import { musicSearch } from '../../api';

export default class Search extends Component {
  state = { data: false, tracks: null, videos: null, collections: null };

  componentDidMount = () => this.results(this.props.match.params.query);
  //getSnapshotBeforeUpdate = value => this.results(value.match.params.query);

  results(query) {
    musicSearch(query, res => {
      this.setState({ data: res.data });
      this.parts();
    });
  }

  parts() {
    const tracks = [];
    const videos = [];
    const collections = [];

    for (const type of this.state.data) {
      if (type.kind === 'song') tracks.push(type);
      else if (type.kind === 'music-video') videos.push(type);
      else if (type.wrapperType === 'collection') collections.push(type);
    }

    this.setState({
      tracks: tracks.map(value => <Track value={value} />),
      videos: videos.map(value => <Video value={value} />),
      collections: collections.map(value => <Collection value={value} />)
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

        <div className="videos">
          <h3 className="videos__title">Videos</h3>
          <div className="videos__container">{this.state.videos}</div>
        </div>
      </React.Fragment>
    ) : (
      <Spinner />
    );
  }
}
