import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import axios from 'axios';

import { handleAuthSSR } from '../../helpers/cookie';

const Layout = dynamic(() => import('../components/templates/Layout'));

interface Props {}

const Song: NextPage<Props> = (data) => (
  <Layout title={data.name}>
    <Product>
      <Aside>
        <Image
          src={data.album.images[0].url}
          alt={data.name}
          shape="square"
          doubleLayer
        />
      </Aside>

      <Main>
        <Summary separate>
          <Title single>{data.name}</Title>

          <Link href="/album/[pid]" as={`/album/${data.album.id}`}>
            <a>
              <h3>{data.album.name}</h3>
            </a>
          </Link>

          <Link href="/artist/[pid]" as={`/artist/${data.artists[0].id}`}>
            <a>
              <h3>{data.artists[0].name}</h3>
            </a>
          </Link>
        </Summary>

        <Lyrics artist={data.artists[0].name} song={data.name} />
      </Main>
    </Product>
  </Layout>
);

Song.getInitialProps = async ({ req, query }) => {
  const token = handleAuthSSR(req);

  const { data } = await axios.get(
    `https://api.spotify.com/v1/tracks/${query.pid}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export default Song;
