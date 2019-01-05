import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { queryString } from '../../helpers';

import './SearchForm.scss';

function SearchForm({ history, search }) {
  const [visible, setVisible] = useState(false);

  const handleChange = e => {
    const value = queryString(e.target.value);

    value
      ? history.push({ pathname: '/search', search: `?q=${value}` })
      : history.push({ pathname: '/', search: '' });
  };

  return (
    <div className="form__container">
      <div className={`search__form ${visible ? 'visible' : 'hidden'}`}>
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />

        <button className="toggle" onClick={() => setVisible(!visible)}>
          <FontAwesomeIcon icon="search" />
        </button>
      </div>
    </div>
  );
}

export default withRouter(SearchForm);
