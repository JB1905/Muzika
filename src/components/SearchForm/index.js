import React, { Component } from 'react';

import './SearchForm.css';

export default class SearchForm extends Component {
  state = { searchTerm: '' };

  handleChange = e => {
    const value = e.target.value.toLowerCase().replace(/ /g, '+');

    this.setState({ searchTerm: e.target.value });
    this.props.dataSearch(value);
  };

  render() {
    return (
      <input
        type="search"
        placeholder="Search"
        value={this.props.search}
        onChange={this.handleChange}
      />
    );
  }
}
