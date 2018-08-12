import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AlbumContent extends Component {
  render() {
    const { value } = this.props;

    return (
      <React.Fragment>
        <div className="container container--sm">
          <aside>
            <img
              className="artwork"
              src={value[0].artworkUrl100.replace('100x100', '400x400')}
              alt=""
            />
          </aside>
        </div>

        <div className="container container--md">
          <div className="content__header">
            <div className="inline">
              <h2 className="title">{value[0].collectionName}</h2>
              <span className={value[0].collectionExplicitness} />
            </div>

            <p>
              By:{' '}
              <Link
                className="link content__link--artist"
                to={`/artist/${value[0].artistName
                  .toLowerCase()
                  .replace(/[¿@#$%^&/|*?"'`]/g, '')
                  .replace(/ /g, '+')}/${value[0].artistId}`}>
                {value[0].artistName}
              </Link>
            </p>

            <p className="about about--album">
              {value[0].primaryGenreName} &bull;{' '}
              {value[0].releaseDate.substring(0, 4)}
            </p>
          </div>

          {this.props.children}

          <div className="copyright">{value[0].copyright}</div>
        </div>
      </React.Fragment>
    );
  }
}
