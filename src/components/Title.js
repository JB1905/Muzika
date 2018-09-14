import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ title, explicit }) => (
  <div className="inline">
    <h2 className="title">{title}</h2>
    <span className={explicit} />
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  explicit: PropTypes.string.isRequired
};
