import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import axios from 'axios';

import Layout from '../../components/templates/Layout';

import { handleAuthSSR } from '../../helpers/cookie';

const Shelf = dynamic(() => import('../../components/molecues/Shelf'));

interface Props {
  artist: any;
  topTracks: any;
  albums: any;
  singles: any;
  compilations: any;
  appearsOn: any;
  relatedArtists: any;
}

const Artist: NextPage<Props> = ({
  artist,
  albums,
  singles,
  compilations,
  appearsOn,
  relatedArtists,
}) => (
  <Layout title={artist.name}>
    {albums.items.length > 0 && (
      <Shelf title="Albums">
        {/* {albums.items.map((item: any) => (
          <Album data={item} key={item.id} year />
        ))} */}
      </Shelf>
    )}

    {singles.items.length > 0 && (
      <Shelf title="Singles & EPs">
        {/* {singles.items.map((item: any) => (
          <Album data={item} key={item.id} year />
        ))} */}
      </Shelf>
    )}

    {compilations.items.length > 0 && (
      <Shelf title="Compilations">
        {/* {compilations.items.map((item: any) => (
          <Album data={item} key={item.id} year />
        ))} */}
      </Shelf>
    )}

    {appearsOn.items.length > 0 && (
      <Shelf title="Appears On">
        {/* {appearsOn.items.map((item: any) => (
          <Album data={item} key={item.id} year />
        ))} */}
      </Shelf>
    )}

    {relatedArtists.artists.length > 0 && (
      <Shelf title="Similar Artists">
        {/* {relatedArtists.artists.map((artist: any) => (
          <ArtistItem data={artist} key={artist.id} />
        ))} */}
      </Shelf>
    )}
  </Layout>
);

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
