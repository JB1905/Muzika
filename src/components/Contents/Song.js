import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SongContent extends Component {
  render() {
    const value = this.props.value;
    const album = value.collectionName
      ? value.collectionName.toLowerCase().replace(/ /g, '+')
      : null;
    const artist = value.artistName.toLowerCase().replace(/ /g, '+');

    return (
      <React.Fragment>
        <div className="container-small">
          <img
            className="artwork"
            src={value.artworkUrl100.replace('100x100', '400x400')}
            alt=""
          />

          <button className="play" onClick={null}>
            &#9654;
          </button>

          <audio className="player" preload="false">
            <source src={value.previewUrl} />
          </audio>
        </div>

        <div className="container-middle">
          <h2>
            {value.trackName}
            <span className={value.trackExplicitness} />
          </h2>

          <div className="song__link">
            Album: &nbsp;
            <Link to={`/album/${album}/${value.collectionId}`}>
              <span>{value.collectionName}</span>
            </Link>
          </div>

          <Link to={`/artist/${artist}/${value.artistId}`}>
            <h3>{value.artistName}</h3>
          </Link>

          <p className="album__about">
            {value.primaryGenreName} &bull; {value.releaseDate.substring(0, 4)}
          </p>

          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
