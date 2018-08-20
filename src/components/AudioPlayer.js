import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class AudioPlayer extends Component {
  state = { play: false };

  componentDidMount = () =>
    this.el.addEventListener('ended', () => this.setState({ play: false }));

  toggle = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.el.pause();
    } else {
      this.setState({ play: true });
      this.el.play();
    }
  };

  render() {
    return (
      <React.Fragment>
        <button
          className={`button--play ${this.state.play ? 'played' : ''}`}
          onClick={this.toggle}>
          {this.state.play ? (
            <FontAwesomeIcon icon="pause" />
          ) : (
            <FontAwesomeIcon icon="play" />
          )}
        </button>

        <audio ref={el => (this.el = el)} preload="false">
          <source src={this.props.src} />
        </audio>
      </React.Fragment>
    );
  }
}
