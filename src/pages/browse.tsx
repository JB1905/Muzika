import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { Cookies } from 'react-cookie';

import Container from '../containers/Container';
import SEO from '../components/SEO';
import Title from '../components/Title';
import { Album, Genere, Playlist } from '../components/items';

import { handleAuthSSR } from '../helpers/cookie';

const Box = dynamic(() => import('../containers/Box'));
const List = dynamic(() => import('../components/List'));

const cookies = new Cookies();

interface Props {
  readonly newReleases: any;
  readonly generes: any;
  readonly playlists: any;
  readonly token: any;
}

const Browse: NextPage<Props> = (data) => {
  const { newReleases, generes, playlists, token } = data;

  cookies.set('token', token);

  return (
    data && (
      <Container>
        <SEO title="Browse" />

        <Title>Browse</Title>

        {newReleases.albums.items.length > 0 && (
          <Box title="New Releases" link="new-releases">
            <List>
              {newReleases.albums.items.map((item: any) => (
                <Album data={item} key={item.id} />
              ))}
            </List>
          </Box>
        )}

        {generes.categories.items.length > 0 && (
          <Box title="Generes">
            <List vertical>
              {generes.categories.items.map((item: any) => (
                <Genere data={item} key={item.id} />
              ))}
            </List>
          </Box>
        )}

        {playlists.playlists.items.length > 0 && (
          <Box title="Playlists" link="featured-playlists">
            <List>
              {playlists.playlists.items.map((item: any) => (
                <Playlist data={item} key={item.id} />
              ))}
            </List>
          </Box>
        )}
      </Container>
    )
  );
};

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
