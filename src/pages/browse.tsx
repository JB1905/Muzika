import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';

import { handleAuthSSR } from '../helpers/cookie';

const Layout = dynamic(() => import('../components/templates/Layout'));
const Title = dynamic(() => import('../components/atoms/Title/Title.styles'));
const Shelf = dynamic(() => import('../components/molecues/Shelf'));

interface Props {
  readonly newReleases: any;
  readonly generes: any;
  readonly playlists: any;
  readonly token: string;
}

const Browse: NextPage<Props> = ({ newReleases, generes, playlists }) => (
  <Layout title="Browse">
    <Title>Browse</Title>

    {newReleases.albums.items.length > 0 && (
      <Shelf title="New Releases" link="new-releases">
        {/* {newReleases.albums.items.map((item: any) => (
            <Album data={item} key={item.id} />
          ))} */}
      </Shelf>
    )}

    {generes.categories.items.length > 0 && (
      <Shelf title="Generes">
        {/* {generes.categories.items.map((item: any) => (
              <Genere data={item} key={item.id} />
            ))} */}
      </Shelf>
    )}

    {playlists.playlists.items.length > 0 && (
      <Shelf title="Playlists" link="featured-playlists">
        {/* {playlists.playlists.items.map((item: any) => (
            <Playlist data={item} key={item.id} />
          ))} */}
      </Shelf>
    )}
  </Layout>
);

Browse.getInitialProps = async ({ req }) => {
  const token = handleAuthSSR(req);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [newReleases, generes, playlists] = await axios.all([
    axios.get(`https://api.spotify.com/v1/browse/new-releases`, config),
    axios.get(
      `https://api.spotify.com/v1/browse/categories?country=pl`,
      config
    ),
    axios.get(
      `https://api.spotify.com/v1/browse/featured-playlists?country=pl`,
      config
    ),
  ]);

  return {
    newReleases: newReleases.data,
    generes: generes.data,
    playlists: playlists.data,
    token,
  };
};

export default Browse;
