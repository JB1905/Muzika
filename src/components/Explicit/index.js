import React from 'react';
import PropTypes from 'prop-types';

import './Explicit.scss';

const Explicit = ({ className }) => <span className={className} />;

Explicit.propTypes = {
  className: PropTypes.string
};

export default Explicit;
