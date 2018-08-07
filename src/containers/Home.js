import React from 'react';
import json from '../../package.json';

export default function Home() {
  return (
    <React.Fragment>
      <h1>{json.name}</h1>

      <p>{json.version}</p>
      <p>{json.author}</p>

      <p>{json.license}</p>
      <p>{json.descripton}</p>
    </React.Fragment>
  );
}
