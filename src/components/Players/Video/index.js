import React from 'react';
import PropTypes from 'prop-types';

import './Video.scss';

const Video = ({ value }) => (
  <video controls poster={value.artworkUrl100.replace('100x100', '800x800')}>
    <source src={value.previewUrl} type="video/mp4" />
  </video>
);

Video.propTypes = {
  value: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired
  })
};

export default Video;
