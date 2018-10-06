import React from 'react';

import './Container.scss';

const Container = ({ children, className }) => (
  <div className={`container ${className}`}>{children}</div>
);

export default Container;
