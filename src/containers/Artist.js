import React, { useState, useEffect } from 'react';

import Preloader from '../components/Preloader';
import HeaderTitle from '../components/HeaderTitle';
import { ArtistList } from '../components/Lists';

import { setPageTitle } from '../helpers';

import { getArtist, getList } from '../api';

export default function Artist(props) {
  const { id } = props.match.params;

  const [artist, setArtist] = useState(null);

  useEffect(() => {
    getArtist(id).then(data => {
      data = data.results[0];

      setArtist(data);
      setPageTitle(`Artist: ${data.artistName}`);
    });

    return null;
  }, []);

  const [songs, setSongs] = useState(null);

  useEffect(() => {
    getList({ id, entity: 'song', limit: 15 }).then(data =>
      setSongs(data.results)
    );

    return null;
  }, []);

  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    getList({ id, entity: 'album', limit: 20 }).then(data =>
      setAlbums(data.results)
    );

    return null;
  }, []);

  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getList({ id, entity: 'musicVideo', limit: 12 }).then(data =>
      setVideos(data.results)
    );

    return null;
  }, []);

  return (
    <>
      <HeaderTitle>
        <h2>{artist && artist.artistName}</h2>
      </HeaderTitle>

      {songs ? (
        <ArtistList values={songs} className="scroller--songs" type="Songs" />
      ) : (
        <Preloader />
      )}

      {albums ? (
        <ArtistList
          values={albums}
          className="scroller--albums"
          type="Albums"
        />
      ) : (
        <Preloader />
      )}

      {videos ? (
        <ArtistList
          values={videos}
          className="scroller--videos"
          type="Music videos"
        />
      ) : (
        <Preloader />
      )}
    </>
  );
}
