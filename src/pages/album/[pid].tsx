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
import { AlbumTrack } from '../../components/items';

import { getYear } from '../../helpers/getYear';
import { handleAuthSSR } from '../../helpers/cookie';

const Album: NextPage<any> = (data) => {
  return (
    data && (
      <Container>
        <SEO title={data.name} />

        <Product>
          <Aside>
            <Image
              src={data.images[0].url}
              alt={data.name}
              shape="square"
              doubleLayer
            />
          </Aside>

          <Main>
            <Summary separate>
              <Title single>{data.name}</Title>

              <div>
                <Link href="/artist/[pid]" as={`/artist/${data.artists[0].id}`}>
                  <a>
                    <h3>{data.artists[0].name}</h3>
                  </a>
                </Link>

                {console.log(data)}

                <time>{getYear(data.release_date)}</time>
              </div>
            </Summary>

            {data.tracks && (
              <ul>
                {data.tracks.items.map((item: any) => (
                  <AlbumTrack data={item} key={item.id} />
                ))}
              </ul>
            )}

            <footer>
              <p>
                {data.total_tracks} {data.total_tracks > 1 ? 'songs' : 'song'},{' '}
                {/* {msToTime(duration)} */}
              </p>

              <p>Released {data.release_date.replace(/-/g, '.')}</p>

              {data.copyrights.length > 0 && <p>{data.copyrights[0].text}</p>}
            </footer>
          </Main>
        </Product>
      </Container>
    )
  );
};

Album.getInitialProps = async ({ req, query }) => {
  const token = handleAuthSSR(req);

  const { data } = await axios.get(
    `https://api.spotify.com/v1/albums/${query.pid}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export default Album;
