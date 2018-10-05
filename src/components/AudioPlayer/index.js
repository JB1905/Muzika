import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AudioPlayer.css';

export default class AudioPlayer extends Component {
  constructor() {
    super();

    this.state = { play: false };

    this.player = React.createRef();
  }

  componentDidMount = () =>
    this.player.current.addEventListener('ended', () =>
      this.setState({ play: false })
    );

  toggle = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.player.current.pause();
    } else {
      this.setState({ play: true });
      this.player.current.play();
    }
  };

  render() {
    return (
      <>
        <button
          className={`button--play ${this.state.play ? 'played' : ''}`}
          onClick={this.toggle}
        >
          {this.state.play ? (
            <FontAwesomeIcon icon="pause" />
          ) : (
            <FontAwesomeIcon icon="play" />
          )}
        </button>

        <audio src={this.props.src} ref={this.player} />
      </>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired
};
