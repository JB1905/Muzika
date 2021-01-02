// import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DebounceInput } from 'react-debounce-input';
// import { useRecoilState } from 'recoil';
import styled from 'styled-components';
// import Router from 'next/router';

// import { searchFormState } from '../../states/searchForm';

export const SearchBox = styled.div`
  /* padding: 11px 0;
  margin-top: 3px;
  margin-bottom: 9px; */
  position: relative;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  margin: 10px 8px;
  margin-left: 10px;
  margin-right: 6px;
  /* margin: 10px 8px; */
  font-size: 12px;

  /* top: 50%;
transform: translateY(-50%) */
`;

export const SearchField = styled(DebounceInput)`
  flex: 1;
  height: 100%;
  width: 100%;
  /* margin-left: 6px; */
  font-size: 1.5rem;
  background: transparent;
  /* color: var(--text-color); */
  overflow: auto;
  border: none;

  border: 1px solid #000;

  border-radius: 4px;

  height: 32px;

  padding-left: 28px;

  padding-top: 6px;
  padding-bottom: 5px;

  :focus {
    /* box-shadow: 0 0 0 4px rgba(var(--primaryColor-rgb),.6); */
    outline-offset: 1px;
    outline: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    position: relative;
    right: 0;
  }
`;

const SearchForm = () => {
  // const [value, setValue] = useRecoilState(searchFormState);

  // useEffect(() => {

  // }, [value]);

  // const handleSubmit = () => {
  //   if (value) {
  //     Router.push(`/search?term=${value}`);
  //   }
  // };

  // const handleClick = () => {
  //   if (!value) {
  //     Router.push('/search-history');
  //   }
  // };

  return (
    <SearchBox>
      <SearchIcon icon={faSearch} />

      {/* <SearchField
        type="search"
        debounceTimeout={500}
        placeholder="Search"
        value={value}
        aria-label="Search"
        // onClick={handleClick}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
      /> */}
    </SearchBox>
  );
};

export default SearchForm;
