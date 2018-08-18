import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchForm from '../SearchForm';

import './Menu.css';

export const Menu = () => (
  <div className="nav--bottom">
    <div>
      <NavLink exact to="/">
        <button className="home">
          <FontAwesomeIcon icon="home" />
          <span>Home</span>
        </button>
      </NavLink>

      <SearchForm dataSearch={this.getValue} />
    </div>
  </div>
);
