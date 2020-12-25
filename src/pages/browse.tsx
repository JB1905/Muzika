import useSWR from 'swr';
import type { GetServerSideProps } from 'next';

import Layout from '../components/templates/Layout';
import Header from '../components/molecues/Header';
import fetcher from '../helpers/fetcher';

type Props = {
  // newReleases:
  // categories
  // playlists
};

function Browse(props: Props) {
  const { data: newReleases, error } = useSWR('browse/new-releases', fetcher, {
    initialData: props.newReleases,
  });

  const { data: generes } = useSWR('browse/categories?country=pl', fetcher, {
    initialData: props.generes,
  });

  const { data: playlists } = useSWR(
    'browse/featured-playlists?country=pl',
    fetcher,
    {
      initialData: props.playlists,
    }
  );

  const title = 'Browse';

  return (
    <Layout title={title}>
      <Header title={title} />

      {newReleases.albums.items.map((item) => (
        <p>{item.name}</p>
      ))}

      {generes.categories.items.map((item) => (
        <p>{item.name}</p>
      ))}

      {playlists.playlists.items.map((item) => (
        <p>{item.name}</p>
      ))}
    </Layout>
  );
}

export default Browse;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const newReleases = await fetcher('browse/new-releases');
  const generes = await fetcher('browse/categories?country=pl');
  const playlists = await fetcher('browse/featured-playlists?country=pl');

  // console.log(req);

  return {
    props: {
      newReleases,
      generes,
      // categories,
      playlists,
    },
  };
};
