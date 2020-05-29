import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';

import Container from '../../containers/Container';
import SEO from '../../components/SEO';
import Header from '../../components/Header';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Box from '../../containers/Box';
import List from '../../components/List';
import { Song, Album, Artist as ArtistItem } from '../../components/items';

import { handleAuthSSR } from '../../helpers/cookie';

const Artist: NextPage<any> = ({
  artist,
  topTracks,
  albums,
  singles,
  compilations,
  appearsOn,
  relatedArtists,
}) => {
  return (
    artist && (
      <Container>
        <SEO title={artist.name} />

        <Header faded>
          <Image
            src={artist.images[0].url}
            alt={artist.name}
            shape="circle"
            size="lg"
            doubleLayer
          />

          <Title>{artist.name}</Title>
        </Header>

        {/* {topTracks.tracks.length > 0 && (
          <Box title="Top Songs">
            <List>
              {topTracks.tracks.map((track: any) => (
                <Song data={track} key={track.id} />
              ))}
            </List>
          </Box>
        )} */}

        {albums.items.length > 0 && (
          <Box title="Albums">
            <List>
              {albums.items.map((item: any) => (
                <Album data={item} key={item.id} year />
              ))}
            </List>
          </Box>
        )}

        {singles.items.length > 0 && (
          <Box title="Singles & EPs">
            <List>
              {singles.items.map((item: any) => (
                <Album data={item} key={item.id} year />
              ))}
            </List>
          </Box>
        )}

        {compilations.items.length > 0 && (
          <Box title="Compilations">
            <List>
              {compilations.items.map((item: any) => (
                <Album data={item} key={item.id} year />
              ))}
            </List>
          </Box>
        )}

        {appearsOn.items.length > 0 && (
          <Box title="Appears On">
            <List>
              {appearsOn.items.map((item: any) => (
                <Album data={item} key={item.id} year />
              ))}
            </List>
          </Box>
        )}

        {relatedArtists.artists.length > 0 && (
          <Box title="Similar Artists">
            <List>
              {relatedArtists.artists.map((artist: any) => (
                <ArtistItem data={artist} key={artist.id} />
              ))}
            </List>
          </Box>
        )}
      </Container>
    )
  );
};

Artist.getInitialProps = async ({ req, query }) => {
  const token = handleAuthSSR(req);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [
    artist,
    topTracks,
    albums,
    singles,
    compilations,
    appearsOn,
    relatedArtists,
  ] = await axios.all([
    axios.get(`https://api.spotify.com/v1/artists/${query.pid}`, config),
    axios.get(
      `https://api.spotify.com/v1/artists/${query.pid}/top-tracks?country=pl`,
      config
    ),
    axios.get(
      `https://api.spotify.com/v1/artists/${query.pid}/albums?include_groups=album`,
      config
    ),
    axios.get(
      `https://api.spotify.com/v1/artists/${query.pid}/albums?include_groups=single`,
      config
    ),
    axios.get(
      `https://api.spotify.com/v1/artists/${query.pid}/albums?include_groups=compilation`,
      config
    ),
    axios.get(
      `https://api.spotify.com/v1/artists/${query.pid}/albums?include_groups=appears_on`,
      config
    ),
    axios.get(
      `https://api.spotify.com/v1/artists/${query.pid}/related-artists`,
      config
    ),
  ]);

  return {
    artist: artist.data,
    topTracks: topTracks.data,
    albums: albums.data,
    singles: singles.data,
    compilations: compilations.data,
    appearsOn: appearsOn.data,
    relatedArtists: relatedArtists.data,
  };
};

export default Artist;
