import React from 'react';
import PropTypes from 'prop-types';

import './Row.scss';

const Row = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Row;
