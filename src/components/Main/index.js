import React from 'react';
import PropTypes from 'prop-types';

import './Main.scss';

const Main = ({ children }) => <main>{children}</main>;

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
