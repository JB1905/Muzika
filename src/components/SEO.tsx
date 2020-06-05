import React from 'react';
import Head from 'next/head';

import json from '../../package.json';

interface Props {
  readonly title?: string;
}

const SEO: React.FC<Props> = ({ title }) => (
  <Head>
    <title>
      {`${json.name[0].toUpperCase()}${json.name.slice(1)}`}
      {title && ` | ${title}`}
    </title>
  </Head>
);

export default SEO;
