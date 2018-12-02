import React, { useState, useEffect } from 'react';

import Preloader from '../components/Preloader';
import HeaderTitle from '../components/HeaderTitle';
import { SearchList } from '../components/Lists';

import { setPageTitle } from '../helpers';

import { getSearch } from '../api';

export default function Search(props) {
  const term = props.location.search.replace('?q=', '');

  setPageTitle(`Results for: ${term}`);

  const [songs, setSongs] = useState(null);

  useEffect(
    () => {
      getSearch({ term, entity: 'song', limit: 15 }).then(data =>
        setSongs(data.results)
      );

      return null;
    },
    [term]
  );

  const [albums, setAlbums] = useState(null);

  useEffect(
    () => {
      getSearch({ term, entity: 'album', limit: 20 }).then(data =>
        setAlbums(data.results)
      );

      return null;
    },
    [term]
  );

  const [videos, setVideos] = useState(null);

  useEffect(
    () => {
      getSearch({ term, entity: 'musicVideo', limit: 12 }).then(data =>
        setVideos(data.results)
      );

      return null;
    },
    [term]
  );

  return (
    <>
      <HeaderTitle>
        <h2>Results for: "{term}"</h2>
      </HeaderTitle>

      {songs ? (
        <SearchList
          {...props}
          values={songs}
          className="scroller--songs"
          type="Songs"
        />
      ) : (
        <Preloader />
      )}

      {albums ? (
        <SearchList
          {...props}
          values={albums}
          className="scroller--albums"
          type="Albums"
        />
      ) : (
        <Preloader />
      )}

      {videos ? (
        <SearchList
          {...props}
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
