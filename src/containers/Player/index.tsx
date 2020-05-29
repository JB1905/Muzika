import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRandom,
  faBackward,
  faPlay,
  faForward,
} from '@fortawesome/free-solid-svg-icons';

const PlayerContainer = styled.div`
  display: grid;
  height: inherit;
`;

const PlayerControls = styled.div`
  // height: 100%;
  // display: flex;
  // align-items: center;
`;

const PlayerControlsItem = styled.button<{ main?: boolean }>`
  background: transparent;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
  color: var(--font-color-faded);
`;

const PlayerPlayback = styled.div``;

export default () => (
  <PlayerContainer>
    <PlayerControls>
      <PlayerControlsItem>
        <FontAwesomeIcon icon={faRandom} />
      </PlayerControlsItem>
      <PlayerControlsItem>
        <FontAwesomeIcon icon={faBackward} />
      </PlayerControlsItem>
      <PlayerControlsItem>
        <FontAwesomeIcon icon={faPlay} />
      </PlayerControlsItem>
      <PlayerControlsItem>
        <FontAwesomeIcon icon={faForward} />
      </PlayerControlsItem>
      {/* <PlayerControlsItem>
        <FontAwesomeIcon icon={faPlay} />
      </PlayerControlsItem> */}
    </PlayerControls>

    <PlayerPlayback></PlayerPlayback>

    <PlayerControls></PlayerControls>
  </PlayerContainer>
);
