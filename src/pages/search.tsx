import React from 'react';
import { NextPage } from 'next';
// import dynamic from 'next/dynamic';
import axios from 'axios';
// import cookie from "cookie";
// import { Cookies } from 'react-cookie';

import Container from '../containers/Container';
import SEO from '../components/SEO';
import Title from '../components/Title';
import Box from '../containers/Box';
import List from '../components/List';
import { Song, Album, Playlist, Artist } from '../components/items';

import { handleAuthSSR } from '../helpers/cookie';

// const cookies = new Cookies();

interface Props {}

const Search: NextPage<Props | any> = (data) => {
  const { tracks, albums, playlists, artists, query } = data;

  // const bestMatch = [tracks.items[0], albums.items[0], artists.items[0]];

  // console.log(bestMatch);

  return (
    data && (
      <Container>
        <SEO title={`Results for: ${query}`} />

        <Title>Results for: {query}</Title>

        {/* {tracks.items.length > 0 && (
          <Box title="Songs">
            <List>
              {tracks.items.map((item: any) => (
                <Song data={item} />
              ))}
            </List>
          </Box>
        )} */}

        {albums.items.length > 0 && (
          <Box title="Albums">
            <List>
              {albums.items.map((item: any) => (
                <Album data={item} />
              ))}
            </List>
          </Box>
        )}

        {playlists.items.length > 0 && (
          <Box title="Playlists">
            <List>
              {playlists.items.map((item: any) => (
                <Playlist data={item} />
              ))}
            </List>
          </Box>
        )}

        {artists.items.length > 0 && (
          <Box title="Artists">
            <List>
              {artists.items.map((item: any) => (
                <Artist data={item} />
              ))}
            </List>
          </Box>
        )}
      </Container>
    )
  );
};

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

  return { ...data, query: query.q, token };
};

export default Search;
