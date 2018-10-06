import React, { Component } from 'react';

import './Welcome.scss';

import json from '../../../package.json';

export default class Welcome extends Component {
  state = { minHeight: null };

  componentDidMount() {
    this.size();

    window.addEventListener('resize', this.size);
  }

  size = () => this.setState({ minHeight: window.innerHeight - 60 });

  render() {
    return (
      <div
        className="welcome__page"
        style={{ minHeight: this.state.minHeight }}
      >
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
}
