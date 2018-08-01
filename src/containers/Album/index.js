import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { musicItems } from '../../api';

export default class Album extends Component {
  state = { data: false };

  componentDidMount() {
    const { id } = this.props.match.params;

    musicItems(id, res => this.setState({ data: res.data[0] }));
  }

  render() {
    const { data } = this.state;
    let artist;

    if (data) {
      artist = data.artistName.toLowerCase().replace(/ /g, '+');
    }

    return (
      <React.Fragment>
        {data ? (
          <div className="album">
            <img src={data.artworkUrl100} alt={data.trackName} />
            <div>
              <h2>{data.collectionName}</h2>
              <Link to={`/artist/${artist}/${data.collectionId}`}>
                <h3>{data.artistName}</h3>
              </Link>
              <p>{data.primaryGenreName}</p>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}
