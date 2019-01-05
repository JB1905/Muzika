import React from 'react';
import PropTypes from 'prop-types';

import './HeaderTitle.scss';

const HeaderTitle = ({ children }) => (
  <header className="header__title">{children}</header>
);

HeaderTitle.propTypes = {
  children: PropTypes.node
};

export default HeaderTitle;
