import React from 'react';
import PropTypes from 'prop-types';

import './Inline.scss';

const Inline = ({ children }) => <div className="inline">{children}</div>;

Inline.propTypes = {
  children: PropTypes.node
};

export default Inline;
