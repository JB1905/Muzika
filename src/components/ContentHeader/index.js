import React from 'react';
import PropTypes from 'prop-types';

import './ContentHeader.scss';

const ContentHeader = ({ children, isVideo }) => (
  <div className={isVideo ? 'content__header--video' : 'content__header'}>
    {children}
  </div>
);

ContentHeader.propTypes = {
  children: PropTypes.node,
  isVideo: PropTypes.bool
};

export default ContentHeader;
