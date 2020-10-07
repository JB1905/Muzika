import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';

import { SearchBox, SearchField } from './SearchForm.styles';

const SearchForm: React.FC = () => {
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
    </SearchBox>
  );
};

export default SearchForm;
