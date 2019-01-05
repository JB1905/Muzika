import React from 'react';
import PropTypes from 'prop-types';

import './Grid.scss';

const Grid = ({ children, className = '' }) => (
  <section className={`grid ${className}`}>{children}</section>
);

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Grid;
