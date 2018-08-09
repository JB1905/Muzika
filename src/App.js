import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSearch } from '@fortawesome/free-solid-svg-icons';
import Darky from 'darky';

import './App.css';
import SearchForm from './components/SearchForm';
import Content from './components/Content';

const darky = new Darky();

library.add(faPlay, faPause, faSearch);

export default class App extends Component {
  state = { searchValue: '' };

  componentDidMount = () => darky.auto();
  getValue = value => this.setState({ searchValue: value });

  render() {
    return (
      <Router basename={'/Muzika'}>
        <React.Fragment>
          <SearchForm dataSearch={this.getValue} />
          <Content value={this.state.searchValue} />
        </React.Fragment>
      </Router>
    );
  }
}
