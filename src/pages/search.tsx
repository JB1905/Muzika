import useSWR from 'swr';
import type { GetServerSideProps } from 'next';

import Layout from '../components/templates/Layout';
import Header from '../components/molecues/Header';
import { useSetSearchQuery } from '../hooks/useSetSearchQuery';
import fetcher from '../helpers/fetcher';

type Props = {};

function Search(props: Props) {
  // const {} = useSWR('')

  useSetSearchQuery(props.query);

  const title = `Results for: ${props.query}`;

  return (
    <Layout title={title}>
      <Header title={title} />
    </Layout>
  );
}

export default Search;

export const getServerSideProps: GetServerSideProps = async ({
  // req,
  query,
}) => {
  const results = await fetcher(
    `search?q=${query.term}&type=track%2Cartist%2Calbum%2Cplaylist`
  );

  return {
    props: {
      results,
      query: query.term,
    },
  };
};
