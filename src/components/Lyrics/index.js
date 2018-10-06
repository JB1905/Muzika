import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

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
      <Spinner />
    )}
  </div>
);

Lyrics.propTypes = {
  content: PropTypes.string,
  error: PropTypes.array
};

export default Lyrics;
