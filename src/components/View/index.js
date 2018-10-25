import React from 'react';
import PropTypes from 'prop-types';

import './View.scss';

const View = ({ children, className }) => (
  <div className={className}>{children}</div>
);

View.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default View;
