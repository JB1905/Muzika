import React from 'react';

export const Title = ({ title, explicit }) => (
  <div className="inline">
    <h2 className="title">{title}</h2>
    <span className={explicit} />
  </div>
);
