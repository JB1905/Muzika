import React from 'react';
import PropTypes from 'prop-types';

import './Grid.scss';

const Grid = ({ children, className }) => (
  <div className={`grid ${className || ''}`}>{children}</div>
);

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Grid;
