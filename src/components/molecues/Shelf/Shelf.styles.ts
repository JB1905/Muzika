import styled from 'styled-components';

export const Grid = styled.div``;

export const Header = styled.header`
  display: flex;
  padding: 14px 0 8px;
  /* margin: 0 var(--body-gutter);
  border-top: 1px solid var(--border-color); */
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.5rem;

    svg {
      margin-left: 5px;
      font-size: 1.4rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    /* margin: 0 var(--body-gutter); */
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
`;

export const Body = styled.ul``;
