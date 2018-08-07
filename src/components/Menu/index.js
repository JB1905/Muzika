import React, { Component } from 'react';

import SearchForm from '../SearchForm';

import './Menu.css';

export default class Menu extends Component {
  getValue = value => this.props.dataSearch(value);

  render() {
    return <SearchForm dataSearch={this.getValue} />;
  }
}
