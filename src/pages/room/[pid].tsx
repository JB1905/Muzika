import React from 'react';
import { NextPage } from 'next';

import Layout from '../../components/templates/Layout';

interface Props {}

const Room: NextPage<Props> = () => {
  return <Layout></Layout>;
};

Room.getInitialProps = async ({ req }) => {
  return {};
};

export default Room;
