import React from 'react';
import PropTypes from 'prop-types';

import './Image.scss';

const Image = ({ className = '', src, size = '100x100', alt = '' }) => (
  <figure className={className}>
    <img src={src.replace('100x100', size)} alt={alt} />
  </figure>
);

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  alt: PropTypes.string
};

export default Image;
