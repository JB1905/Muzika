import React, { Component } from 'react';

import Spinner from '../components/Spinner';
import { ArtistList } from '../components/Lists';

/*
import { ArtistImage } from '../components/ArtistImage';
import { ArtistBio } from '../components/ArtistBio';
import { Concerts } from '../components/Concerts';
import { SocialMedia } from '../components/SocialMedia';
*/

import { artist, list } from '../api';

export default class Artist extends Component {
  state = { artist: null, songs: null, albums: null, videos: null };

  componentDidMount() {
    const { id } = this.props.match.params;

    artist(id).then(data => this.setState({ artist: data.results[0] }));

    list({ id: id, entity: 'song', limit: 15 }).then(data =>
      this.setState({ songs: data.results })
    );

    list({ id: id, entity: 'album', limit: 20 }).then(data =>
      this.setState({ albums: data.results })
    );

    list({ id: id, entity: 'musicVideo', limit: 12 }).then(data =>
      this.setState({ videos: data.results })
    );
  }

  render() {
    return (
      <>
        {/*<ArtistImage name={null} id={null} />*/}

        <div className="header__title">
          <h2>{this.state.artist ? this.state.artist.artistName : null}</h2>
        </div>

        {this.state.songs ? (
          <ArtistList
            {...this.props}
            values={this.state.songs}
            className="scroller--songs"
            type="Songs"
          />
        ) : (
          <Spinner />
        )}

        {this.state.albums ? (
          <ArtistList
            {...this.props}
            values={this.state.albums}
            className="scroller--albums"
            type="Albums"
          />
        ) : (
          <Spinner />
        )}

        {this.state.videos ? (
          <ArtistList
            {...this.props}
            values={this.state.videos}
            className="scroller--videos"
            type="Music videos"
          />
        ) : (
          <Spinner />
        )}

        {/*
          <ArtistBio name={null} id={null} />
          <Concerts name={null} id={null} />
          <SocialMedia name={null} id={null} />
        */}
      </>
    );
  }
}
