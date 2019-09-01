import React from 'react';
import { Helmet } from 'react-helmet';

import json from '../../package.json';

const SEO = ({ title }) => (
  <Helmet>
    <title>
      {json.name}
      {title && ` | ${title}`}
    </title>
  </Helmet>
);

export default SEO;
