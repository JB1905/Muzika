import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { album } from '../../api';

export default class Album extends Component {
  state = { data: false };

  componentDidMount() {
    const { id } = this.props.match.params;

    album(id, res => this.setState({ data: res.data[0] }));
  }

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        {data ? (
          <div>
            <img src={data.artworkUrl100} alt={data.trackName} />
            <h2>{data.collectionName}</h2>
            {/*<Link to={`/artist/${artist}/${data.collectionId}`}>
        <h3>{data.artistName}</h3>
      </Link>*/}
          </div>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}
