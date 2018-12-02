import React, { useState, useEffect } from 'react';

import Preloader from '../components/Preloader';
import Col from '../components/Col';
import ContentHeader from '../components/ContentHeader';
import Title from '../components/Title';
import { AlbumLink, ArtistLink } from '../components/Links';
import Image from '../components/Image';
import { AudioPlayer } from '../components/Players';
import Info from '../components/Info';
import Lyrics from '../components/Lyrics';

import { setPageTitle } from '../helpers';

import { getSong, getLyrics } from '../api';

export default function Song(props) {
  const { id } = props.match.params;

  const [song, setSong] = useState(null);

  useEffect(() => {
    getSong(id).then(data => {
      data = data.results[0];

      setSong(data);
      setPageTitle(`Song: ${data.trackName}`);

      fetchLyrics(data);
    });

    return null;
  }, []);

  const [lyrics, setLyrics] = useState(null);
  const [error, setError] = useState(null);

  function fetchLyrics(song) {
    getLyrics(song.artistName, song.trackName).then(data => {
      setLyrics(data.lyrics);
      setError(data.error);
    });
  }

  return song ? (
    <article className="song">
      <Col className="secondary">
        <aside>
          <Image className="artwork" src={song.artworkUrl100} size="400x400" />

          {song.previewUrl && <AudioPlayer src={song.previewUrl} />}
        </aside>
      </Col>

      <Col className="primary">
        <ContentHeader type="song">
          <Title title={song.trackName} explicit={song.trackExplicitness} />
          <AlbumLink value={song} />
          <ArtistLink value={song} />
          <Info value={song} />
        </ContentHeader>

        <Lyrics content={lyrics} error={error} />
      </Col>
    </article>
  ) : (
    <Preloader />
  );
}
