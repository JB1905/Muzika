import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const SearchBox = styled.div`
  padding: 11px 0;
  margin-top: 3px;
  margin-bottom: 9px;
`;

export const SearchField = styled(DebounceInput)`
  flex: 1;
  height: 100%;
  margin-left: 6px;
  font-size: 1.5rem;
  background: transparent;
  /* color: var(--text-color); */
  overflow: auto;
  border: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: relative;
    right: 0;
  }
`;
