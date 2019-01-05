import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

import './Lyrics.scss';

const Lyrics = ({ content, error }) => (
  <div className="lyrics">
    {error ? (
      error
    ) : content ? (
      content.split('\n').map((item, index) => (
        <span key={index}>
          {item}
          <br />
        </span>
      ))
    ) : (
      <Loader />
    )}
  </div>
);

Lyrics.propTypes = {
  content: PropTypes.string,
  error: PropTypes.string
};

export default Lyrics;
