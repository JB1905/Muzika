import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchForm from '../SearchForm';

import './Menu.scss';

const Menu = () => (
  <div className="nav--bottom">
    <div>
      <NavLink exact to="/" className="home">
        <FontAwesomeIcon icon="home" />
        <span>Home</span>
      </NavLink>

      <SearchForm />
    </div>
  </div>
);

export default Menu;
