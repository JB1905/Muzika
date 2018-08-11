import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SearchForm.css';

export default class SearchForm extends Component {
  state = { searchTerm: '', visible: false };

  handleChange = e => {
    const value = e.target.value
      .toLowerCase()
      .replace(/[¿@#$%^&/|*?"'`]/g, '')
      .replace(/ /g, '+');

    this.setState({ searchTerm: e.target.value });
    this.props.dataSearch(value);
  };

  handleClick = () => {
    this.state.visible
      ? this.setState({ visible: false })
      : this.setState({ visible: true });
  };

  render() {
    return (
      <div className="form__container">
        <div
          className={`search__form ${
            this.state.visible ? 'visible' : 'hidden'
          }`}>
          <input
            type="search"
            placeholder="Search"
            value={this.props.search}
            onChange={this.handleChange}
          />
          <button className="toggle" onClick={this.handleClick}>
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
      </div>
    );
  }
}
