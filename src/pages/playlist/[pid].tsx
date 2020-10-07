import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import stripHtml from 'string-strip-html';
import axios from 'axios';

import { handleAuthSSR } from '../../helpers/cookie';

const Layout = dynamic(() => import('../components/templates/Layout'));

interface Props {}

const Playlist: NextPage<Props> = (data) => (
  <Layout title={data.name}>
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

            {/* {data.tracks.items.map((item: any) => (
                <PlaylistTrack data={item} key={item.track.id} />
              ))} */}
          </ul>
        )}

        <footer>
          <p>Tracks: {data.tracks.total}</p>
        </footer>
      </Main>
    </Product>
  </Layout>
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
