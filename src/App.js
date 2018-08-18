import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faPause,
  faSearch,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import Darky from 'darky';

import './App.css';

import { Content } from './components/Content';
import { Menu } from './components/Menu';

const darky = new Darky();

library.add(faPlay, faPause, faSearch, faHome);

export default class App extends Component {
  state = { searchValue: '' };

  componentDidMount = () => darky.auto();
  getValue = value => this.setState({ searchValue: value });

  render() {
    return (
      <Router basename={'/Muzika'}>
        <React.Fragment>
          <div className="main">
            <Content value={this.state.searchValue} />
          </div>

          <Menu dataSearch={this.getValue} />
        </React.Fragment>
      </Router>
    );
  }
}
