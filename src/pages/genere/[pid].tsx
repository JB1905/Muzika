import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';

import Container from '../../containers/Container';
import SEO from '../../components/SEO';
import Header from '../../components/Header';
import Image from '../../components/Image';
import Title from '../../components/Title';
import List from '../../components/List';
import { Playlist } from '../../components/items';

import { handleAuthSSR } from '../../helpers/cookie';

const Genere: NextPage<any> = (data) => {
  const { genere, playlists } = data;

  return (
    <Container>
      <SEO title={genere.name} />

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
    </Container>
  );
};

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
