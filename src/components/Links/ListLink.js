import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { queryString } from '../../helpers';

export const ListLink = ({ list, name, id, type, explicit }) => (
  <>
    <Link className={`link ${list}`} to={`/${type}/${queryString(name)}/${id}`}>
      {name}
    </Link>

    <span className={explicit} />
  </>
);

ListLink.propTypes = {
  list: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  explicit: PropTypes.string.isRequired
};
