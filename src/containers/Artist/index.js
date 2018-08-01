import React, { Component } from 'react';
import Spinner from '../../components/Spinner';
//import { Timeline } from 'react-twitter-widgets';
import { musicSearch } from '../../api';
//import { FBPage } from 'facebook-plugins';
import './Artist.css';

export default class Artist extends Component {
  state = { data: false };

  componentDidMount() {
    const { id } = this.props.match.params;

    musicSearch(id, res => {
      this.setState({ data: res.data[0] });
      this.facebook();
      this.twitter();
      this.instagram();
    });
  }

  facebook() {}
  twitter() {}
  instagram() {}

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        {!data ? (
          <Spinner />
        ) : (
          <div className="artist">
            <div className="container-full">
              <h2>{data.artistName}</h2>
            </div>

            <div className="container-full">
              <h3>About</h3>

              <h3>Songs</h3>

              <h3>Albums</h3>

              <h3>Videos</h3>

              <div className="network-container">
                <div className="container">{/*this.state.twitter*/}</div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
