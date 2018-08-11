import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class SongContent extends Component {
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
    const data = this.props.value;
    const album = data.collectionName
      ? data.collectionName
          .toLowerCase()
          .replace(/[¿@#$%^&/|*?"'`]/g, '')
          .replace(/ /g, '+')
      : null;

    const artist = data.artistName
      .toLowerCase()
      .replace(/[¿@#$%^&/|*?"'`]/g, '')
      .replace(/ /g, '+');

    return (
      <React.Fragment>
        <div className="container container--sm">
          <aside>
            <img
              className="artwork content__artwork"
              src={data.artworkUrl100.replace('100x100', '400x400')}
              alt=""
            />

            <button
              className={`button--play ${this.state.play ? 'played' : null}`}
              onClick={this.toggle}>
              {this.state.play ? (
                <FontAwesomeIcon icon="pause" />
              ) : (
                <FontAwesomeIcon icon="play" />
              )}
            </button>

            <audio ref={el => (this.el = el)} preload="false">
              <source src={data.previewUrl} />
            </audio>
          </aside>
        </div>

        <div className="container container--md">
          <div className="content__header">
            <h2 className="title title--song">
              {data.trackName}
              <span className={data.trackExplicitness} />
            </h2>

            <p>
              <Link
                className="link content__link--album"
                to={`/album/${album}/${data.collectionId}`}>
                {data.collectionName}
              </Link>
            </p>

            <p>
              By:{' '}
              <Link
                className="link content__link--artist"
                to={`/artist/${artist}/${data.artistId}`}>
                {data.artistName}
              </Link>
            </p>

            <p className="about about--song">
              {data.primaryGenreName} &bull; {data.releaseDate.substring(0, 4)}
            </p>
          </div>

          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}
