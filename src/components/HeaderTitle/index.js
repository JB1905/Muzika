import React from 'react';
import PropTypes from 'prop-types';

import './HeaderTitle.scss';

const HeaderTitle = ({ children }) => (
  <div className="header__title">{children}</div>
);

HeaderTitle.propTypes = {
  children: PropTypes.node
};

export default HeaderTitle;
