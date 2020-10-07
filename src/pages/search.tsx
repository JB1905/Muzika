import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';

import Layout from '../components/templates/Layout';

import Title from '../components/atoms/Title/Title.styles';

import { handleAuthSSR } from '../helpers/cookie';

const Shelf = dynamic(() => import('../components/molecues/Shelf'));

interface Props {
  tracks: any;
  albums: any;
  playlists: any;
  artists: any;
  query: string;
}

const Search: NextPage<Props> = ({
  tracks,
  albums,
  playlists,
  artists,
  query,
}) => (
  <Layout title={`Results for: ${query}`}>
    <Title>Results for: {query}</Title>

    {tracks.items.length > 0 && (
      <Shelf title="Songs">
        {/* {tracks.items.map((item: any) => (
          <Song data={item} />
        ))} */}
      </Shelf>
    )}

    {tracks.items.length > 0 && (
      <Shelf title="Songs">
        {/* {tracks.items.map((item: any) => (
          <Song data={item} />
        ))} */}
      </Shelf>
    )}

    {albums.items.length > 0 && (
      <Shelf title="Albums">
        {/* {albums.items.map((item: any) => (
          <Album data={item} />
        ))} */}
      </Shelf>
    )}

    {playlists.items.length > 0 && (
      <Shelf title="Playlists">
        {/* {playlists.items.map((item: any) => (
              <Playlist data={item} />
            ))} */}
      </Shelf>
    )}

    {artists.items.length > 0 && (
      <Shelf title="Artists">
        {/* {artists.items.map((item: any) => (
            <Artist data={item} />
          ))} */}
      </Shelf>
    )}
  </Layout>
);

Search.getInitialProps = async ({ req, query }) => {
  const token = handleAuthSSR(req);

  const { data } = await axios.get(
    `https://api.spotify.com/v1/search?q=${query.q}&type=track%2Cartist%2Calbum%2Cplaylist`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return {
    ...data,
    query: query.q,
    token,
  };
};

export default Search;
