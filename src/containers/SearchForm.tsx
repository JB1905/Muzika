import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DebounceInput } from 'react-debounce-input';
import Router from 'next/router';

const SearchBox = styled.div`
  padding: 11px 0;
  margin-top: 3px;
  margin-bottom: 9px;
`;

// const SearchForm = styled.div`
//   display: flex;
//   align-items: center;
//   background-color: var(--bg-color);
//   border: 1px solid var(--search-form-border-color);
//   color: var(--search-form-color);
//   border-radius: 10px;
//   padding: 0 8px;
//   width: 100%;
//   height: 38px;

//   @media (min-width: ${({ theme }) => theme.breakpoints.sm})) {
//     height: 32px;
//     border-radius: 4px;
//   }

//   svg {
//     color: #7b7b7b;
//     font-size: 1.8rem;

//     @media (min-width: ${({ theme }) => theme.breakpoints.sm})) {
//       font-size: 1.2rem;
//     }
//   }
// `;

const SearchField = styled(DebounceInput)`
  flex: 1;
  height: 100%;
  margin-left: 6px;
  font-size: 1.5rem;
  background: transparent;
  color: var(--text-color);
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

const SearchForm = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value) {
      Router.push(`/search?q=${value}`);
    }
  }, [value]);

  const handleClick = () => {
    if (!value) {
      Router.push('/search-history');
    }
  };

  return (
    <SearchBox>
      {/* <SearchForm> */}
      <FontAwesomeIcon icon={faSearch} />

      <SearchField
        type="search"
        debounceTimeout={500}
        placeholder="Search"
        value={value}
        aria-label="Search"
        // onClick={handleClick}
        onChange={(e: any) => setValue(e.target.value)}
      />
      {/* </SearchForm> */}
    </SearchBox>
  );
};

export default SearchForm;
