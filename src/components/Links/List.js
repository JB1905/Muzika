import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Explicit from '../Explicit';

import { queryString } from '../../helpers';

const List = ({ list, name, id, type, explicit }) => (
  <>
    <Link
      className={`link list__link--${list}`}
      to={`/${type}/${queryString(name)}/${id}`}
    >
      {name}
    </Link>

    <Explicit className={explicit} />
  </>
);

List.propTypes = {
  list: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.string.isRequired,
  explicit: PropTypes.string.isRequired
};

export default List;
