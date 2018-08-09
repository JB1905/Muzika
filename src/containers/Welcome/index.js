import React from 'react';

import json from '../../../package.json';

import './Welcome.css';

export default function Welcome() {
  return (
    <div
      className="welcome__page"
      style={{
        minHeight: window.innerHeight
      }}>
      <div className="welcome__content">
        <h1>{json.name}.</h1>

        <h2 className="light">
          Version {json.version} creted by {json.author} under {json.license}{' '}
          license.
        </h2>

        <h2>About:</h2>
        <h3 className="light">{json.descripton}</h3>
      </div>
    </div>
  );
}
