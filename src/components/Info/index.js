import React from 'react';
import PropTypes from 'prop-types';

import './Info.scss';

const Info = ({ value }) => (
  <p className="info">
    {value.primaryGenreName} &bull; {value.releaseDate.substring(0, 4)}
  </p>
);

Info.propTypes = {
  value: PropTypes.shape({
    primaryGenreName: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  })
};

export default Info;
