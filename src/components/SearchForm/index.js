import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { queryString } from '../../helpers';

import './SearchForm.css';

export default class SearchForm extends Component {
  state = { searchTerm: '', redirect: '', visible: false };

  handleChange = e => {
    const value = queryString(e.target.value);
    if (value !== '') {
      this.setState({ redirect: <Redirect to={`/search?q=${value}`} /> });
    } else {
      this.setState({ redirect: <Redirect to={`/`} /> });
    }

    this.setState({ searchTerm: e.target.value });
  };

  handleClick = () =>
    this.state.visible
      ? this.setState({ visible: false })
      : this.setState({ visible: true });

  render() {
    return (
      <div className="form__container">
        {this.state.redirect}

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
