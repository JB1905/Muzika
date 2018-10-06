import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { queryString } from '../../helpers';

import './SearchForm.scss';

class SearchForm extends Component {
  state = { searchTerm: '', visible: false };

  handleChange = e => {
    const value = queryString(e.target.value);

    if (value !== '') {
      this.props.history.push({ pathname: 'search', search: `?q=${value}` });
    } else {
      this.props.history.push({ pathname: '/', search: '' });
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
        <div
          className={`search__form ${
            this.state.visible ? 'visible' : 'hidden'
          }`}
        >
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

export default withRouter(SearchForm);
