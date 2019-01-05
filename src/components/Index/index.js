import React from 'react';
import PropTypes from 'prop-types';

import './Index.scss';

const Index = ({ trackNumber }) => <p className="index">{trackNumber}.</p>;

Index.propTypes = {
  trackNumber: PropTypes.number.isRequired
};

export default Index;
