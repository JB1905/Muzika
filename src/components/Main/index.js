import React from 'react';
import PropTypes from 'prop-types';

import './Main.scss';

const Main = ({ children }) => <div className="main">{children}</div>;

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
