import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

import TopBar from '../components/TopBar';

import Player from './Player';

const Site = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

const Container = styled.main`
  margin-bottom: 48px;
  min-height: calc(100vh - 48px);
  // width: calc(100vw - 260px);
  width: 100%;
  // min-height: calc(var(--vh) - 48px);
  // display: contents;

  margin-bottom: calc(48px + env(safe-area-inset-bottom));

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: calc(100vw - 260px);
    margin-bottom: 0;
  }
`;

const Page = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 44px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-top: 0;
  }
`;

export default ({ children }: any) => (
  <Site>
    <Menu />

    <Container>
      {/* <TopBar>
        <Player />
      </TopBar> */}

      <Page>{children}</Page>
    </Container>
  </Site>
);
