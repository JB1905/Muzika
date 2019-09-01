import React from 'react';

import './Loader.scss';

const Loader = () => (
  <div className="loader">
    <div className="loader__bounce" />
    <div className="loader__bounce loader__bounce--delayed" />
  </div>
);

export default Loader;
