import React from 'react';

export const Info = ({ value }) => (
  <p className="info">
    {value.primaryGenreName} &bull; {value.releaseDate.substring(0, 4)}
  </p>
);
