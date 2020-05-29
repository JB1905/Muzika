import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import axios from 'axios';

import Container from '../../containers/Container';
import SEO from '../../components/SEO';
import Product from '../../components/Product';
import Aside from '../../components/Aside';
import Image from '../../components/Image';
import Main from '../../components/Main';
import Summary from '../../components/Summary';
import Title from '../../components/Title';
import Lyrics from '../../containers/Lyrics';

import { handleAuthSSR } from '../../helpers/cookie';

const Song: NextPage<any> = (data) =>
  data && (
    <Container>
      <SEO title={data.name} />

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
    </Container>
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
