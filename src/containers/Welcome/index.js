import React, { useState, useEffect } from 'react';

import './Welcome.scss';

import { setPageTitle } from '../../helpers';

import {
  name,
  version,
  author,
  license,
  descripton
} from '../../../package.json';

export default function Welcome() {
  setPageTitle('Home');

  const [minHeight, setMinHeight] = useState(window.innerHeight - 60);

  const resize = () => setMinHeight(window.innerHeight - 60);

  useEffect(() => {
    window.addEventListener('resize', () => resize());

    return () => window.removeEventListener('resize', () => resize());
  }, []);

  return (
    <div className="welcome" style={{ minHeight }}>
      <div className="welcome__content">
        <h1>{name}.</h1>

        <h2 className="light">
          Version {version} creted by {author} under {license} license.
        </h2>

        <h2>About:</h2>
        <h3 className="light">{descripton}</h3>
      </div>
    </div>
  );
}
