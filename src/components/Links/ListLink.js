import React from 'react';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const ListLink = ({ list, name, id, type, explicit }) => (
  <React.Fragment>
    <Link className={`link ${list}`} to={`/${type}/${queryString(name)}/${id}`}>
      {name}
    </Link>

    <span className={explicit} />
  </React.Fragment>
);
