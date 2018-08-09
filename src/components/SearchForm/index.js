import React, { Component } from 'react';

import './SearchForm.css';

export default class SearchForm extends Component {
  state = { searchTerm: '', visible: false };

  handleChange = e => {
    const value = e.target.value.toLowerCase().replace(/ /g, '+');

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
      <div
        className={`search-form ${this.state.visible ? 'visible' : 'hidden'}`}>
        <input
          type="search"
          placeholder="Search"
          value={this.props.search}
          onChange={this.handleChange}
        />
        <button className="toggle" onClick={this.handleClick}>
          &#128269;
        </button>
      </div>
    );
  }
}
