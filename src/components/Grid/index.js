import React from 'react';

import './Grid.scss';

const Grid = ({ children, className }) => (
  <div className={`grid ${className || ''}`}>{children}</div>
);

export default Grid;
