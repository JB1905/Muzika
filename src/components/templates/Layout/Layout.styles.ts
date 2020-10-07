import styled from 'styled-components';

export const Site = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

export const Container = styled.main`
  margin-bottom: 48px;
  min-height: calc(100vh - 48px);
  margin-bottom: calc(48px + env(safe-area-inset-bottom));
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: calc(100vw - 260px);
    margin-bottom: 0;
  }
`;
