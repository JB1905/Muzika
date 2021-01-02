import styled from 'styled-components';

// TODO rename?
const Wrapper = styled.div`
  height: 55px;
  position: sticky;
  top: 0;
`;

// TODO rename
const Inner = styled.div`
  padding: 5px 0;
  height: 100%;
`;

const Controls = () => {
  return (
    <div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const Player = () => {
  return (
    <div>
      <div></div>

      <div>{/* <div>
      <div></div>
        
        </div> */}</div>
    </div>
  );
};

const Settings = () => {
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export const AppBar = () => {
  return (
    <Wrapper>
      <Inner>
        <Controls />
        <Player />
        <Settings />
      </Inner>
    </Wrapper>
  );
};
