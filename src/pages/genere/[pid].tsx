import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';

import { handleAuthSSR } from '../../helpers/cookie';

const Layout = dynamic(() => import('../components/templates/Layout'));

interface Props {}

const Genere: NextPage<Props> = ({ genere, playlists }) => (
  <Layout title={genere.name}>
    <Header faded bottomExtraSpace>
      <Image
        src={genere.icons[0].url}
        alt={genere.name}
        shape="circle"
        size="lg"
        doubleLayer
      />

      <Title>{genere.name}</Title>
    </Header>

    <List vertical grid>
      {playlists.playlists.items.map((item: any) => (
        <Playlist data={item} key={item.id} />
      ))}
    </List>
  </Layout>
);

Genere.getInitialProps = async ({ req, query }) => {
  const token = handleAuthSSR(req);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [genere, playlists] = await axios.all([
    axios.get(
      `https://api.spotify.com/v1/browse/categories/${query.pid}`,
      config
    ),
    axios.get(
      `https://api.spotify.com/v1/browse/categories/${query.pid}/playlists`,
      config
    ),
  ]);

  return {
    genere: genere.data,
    playlists: playlists.data,
  };
};

export default Genere;
