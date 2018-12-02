import React, { useState, useEffect } from 'react';

import Preloader from '../../components/Preloader';
import HeaderTitle from '../../components/HeaderTitle';
import { SongItem, AlbumItem, VideoItem } from '../../components/Items';
import Container from '../../components/Container';

import './More.scss';

import { setPageTitle } from '../../helpers';

import { getSearch, getList } from '../../api';

export default function More(props) {
  const [title, setTitle] = useState(null);
  const [list, setList] = useState(null);

  let params;

  useEffect(() => {
    props.location.pathname.includes('artist/') ? artist() : search();
  }, []);

  function artist() {
    const { id, type } = props.match.params;

    params = checkKind(type);

    getList({ id, entity: params.entity, limit: 100 }).then(data => {
      data = data.results;

      setPageTitle(`${params.kind} by: ${data[0].artistName}`);
      setTitle(`${params.kind} by: ${data[0].artistName}`);

      content(data);
    });
  }

  function search() {
    const term = props.history.location.search.replace('?q=', '');
    const type = props.history.location.pathname.replace('/', '');

    params = checkKind(type);

    getSearch({ term, entity: params.entity, limit: 100 }).then(data => {
      data = data.results;

      setPageTitle(`${params.kind} for query: ${term}`);
      setTitle(`${params.kind} for query: "${term}"`);

      content(data);
    });
  }

  function checkKind(type) {
    let entity, kind;

    if (type === 'songs') {
      entity = 'song';
      kind = 'Songs';
    } else if (type === 'albums') {
      entity = 'album';
      kind = 'Albums';
    } else if (type === 'music-videos') {
      entity = 'musicVideo';
      kind = 'Music videos';
    }

    return { entity, kind };
  }

  function content(data) {
    const content = data.map((item, index) => {
      if (item.kind === 'song') {
        return <SongItem key={index} value={item} />;
      } else if (item.collectionType === 'Album') {
        return <AlbumItem key={index} value={item} />;
      } else if (item.kind === 'music-video') {
        return <VideoItem key={index} value={item} />;
      }

      return false;
    });

    setList(content);
  }

  return list ? (
    <>
      <HeaderTitle>
        <h2>{title}</h2>
      </HeaderTitle>

      <Container className="container--vertical">{list}</Container>
    </>
  ) : (
    <Preloader />
  );
}
