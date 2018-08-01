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
    let artist;

    if (data) {
      artist = data.artistName.toLowerCase().replace(/ /g, '+');
    }

    return (
      <React.Fragment>
        {data ? (
          <div className="video">
            <div className="container-middle">
              <video controls>
                <source src={data.previewUrl} type="video/mp4" />
              </video>
            </div>

            <div className="container-small">
              <h2>
                {data.trackName}
                <span className={data.trackExplicitness} />
              </h2>
              <Link to={`/artist/${artist}/${data.artistId}`}>
                <h3>{data.artistName}</h3>
              </Link>
              <p>
                {data.primaryGenreName} &bull;{' '}
                {data.releaseDate.substring(0, 4)}
              </p>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}
