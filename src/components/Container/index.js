import React from 'react';
import PropTypes from 'prop-types';

import './Container.scss';

const Container = ({ children, className = '' }) => (
  <ul className={`container ${className}`}>{children}</ul>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Container;
