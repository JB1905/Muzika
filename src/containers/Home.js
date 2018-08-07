import React from 'react';
import json from '../../package.json';

export default function Home() {
  return (
    <div className="title">
      <h1>{json.name}</h1>

      <p>{json.version}</p>
      <p>{json.author}</p>
    </div>
  );
}
