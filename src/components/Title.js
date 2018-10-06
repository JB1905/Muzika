import React from 'react';
import PropTypes from 'prop-types';

import Inline from './Inline';

const Title = ({ title, explicit }) => (
  <Inline>
    <h2 className="title">{title}</h2>
    <span className={explicit} />
  </Inline>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  explicit: PropTypes.string.isRequired
};

export default Title;
