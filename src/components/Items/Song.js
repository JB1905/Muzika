import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class SongItem extends Component {
  state = { play: false };

  toggle = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.el.pause();
    } else {
      this.setState({ play: true });
      this.el.play();
    }
  };

  render() {
    const { value } = this.props;
    const song = value.trackName
      .toLowerCase()
      .replace(/[¿@#$%^&/|*?"'`]/g, '')
      .replace(/ /g, '+');

    const album = value.collectionName
      .toLowerCase()
      .replace(/[¿@#$%^&/|*?"'`]/g, '')
      .replace(/ /g, '+');

    return (
      <div className="track">
        <section className="track__primary">
          <img className="track__img" src={value.artworkUrl60} alt="" />

          <audio ref={el => (this.el = el)} preload="false">
            <source src={value.previewUrl} />
          </audio>

          <button className="button--play" onClick={this.toggle}>
            {this.state.play ? (
              <FontAwesomeIcon icon="pause" />
            ) : (
              <FontAwesomeIcon icon="play" />
            )}
          </button>
        </section>

        <section className="track__secondary">
          <div className="inline">
            <Link
              className="link list__link--song"
              to={`/song/${song}/${value.trackId}`}>
              {value.trackName}
            </Link>

            <div className={value.trackExplicitness} />
          </div>

          <Link
            className="link list__link--album"
            to={`/album/${album}/${value.collectionId}`}>
            {value.collectionName} &bull; {value.releaseDate.substring(0, 4)}
          </Link>
        </section>
      </div>
    );
  }
}
