import React from 'react';
import PropTypes from 'prop-types';

import './Col.scss';

const Col = ({ children, className = '' }) => (
  <div className={`col ${className}`}>{children}</div>
);

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Col;
