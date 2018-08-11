import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchForm from '../SearchForm';

import './Menu.css';

export default class Menu extends Component {
  getValue = value => this.props.dataSearch(value);

  render() {
    return (
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
  }
}
