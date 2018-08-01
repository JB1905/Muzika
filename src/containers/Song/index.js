import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { musicSearch, lyrics } from '../../api';

export default class Song extends Component {
  state = { data: false, lyrics: false };

  componentDidMount() {
    const { id } = this.props.match.params;

    musicSearch(id, res => {
      this.setState({ data: res.data[0] });
      this.lyrics();
    });
  }

  lyrics() {
    lyrics(this.state.data.artistName, this.state.data.trackName, res =>
      this.setState({ lyrics: res.data })
    );
  }

  render() {
    const { data, lyrics } = this.state;
    let album;
    let artist;

    if (data) {
      album = data.collectionName.toLowerCase().replace(/ /g, '+');
      artist = data.artistName.toLowerCase().replace(/ /g, '+');
    }

    return (
      <React.Fragment>
        {data ? (
          <div className="song">
            <div>
              <img src={data.artworkUrl100} alt={data.trackName} />

              <p>Single Price: {data.trackPrice}$</p>
              <audio controls className="player" preload="false">
                <source src={data.previewUrl} />
              </audio>
            </div>

            <div>
              <h2>
                {data.trackName}
                <span className={data.trackExplicitness} />
              </h2>
              Album: &nbsp;
              <Link to={`/album/${album}/${data.collectionId}`}>
                <span>{data.collectionName}</span>
              </Link>
              <Link to={`/artist/${artist}/${data.artistId}`}>
                <h3>{data.artistName}</h3>
              </Link>
              <p>{`${data.primaryGenreName}` /*` • ${year}`*/}</p>
              {lyrics ? (
                lyrics.split('\n').map(item => (
                  <span>
                    {item}
                    <br />
                  </span>
                ))
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </React.Fragment>
    );
  }
}
