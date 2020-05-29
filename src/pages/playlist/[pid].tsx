import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import stripHtml from 'string-strip-html';

import Container from '../../containers/Container';
import SEO from '../../components/SEO';
import Product from '../../components/Product';
import Aside from '../../components/Aside';
import Image from '../../components/Image';
import Main from '../../components/Main';
import Summary from '../../components/Summary';
import Title from '../../components/Title';
import { PlaylistTrack } from '../../components/items';

import { handleAuthSSR } from '../../helpers/cookie';

const Playlist: NextPage<any> = (data) =>
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
          <Summary>
            <Title single>{data.name}</Title>

            <p>{stripHtml(data.description)}</p>
          </Summary>

          {data.tracks && (
            <ul>
              {/* <li className="playlist-header">
                <p>Song</p>
                <p>Album</p>
              </li> */}

              {data.tracks.items.map((item: any) => (
                <PlaylistTrack data={item} key={item.track.id} />
              ))}
            </ul>
          )}

          <footer>
            <p>Tracks: {data.tracks.total}</p>
          </footer>
        </Main>
      </Product>
    </Container>
  );

Playlist.getInitialProps = async ({ req, query }) => {
  const token = handleAuthSSR(req);

  const { data } = await axios.get(
    `https://api.spotify.com/v1/playlists/${query.pid}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return data;
};

export default Playlist;
