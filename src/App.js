import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Darky from 'darky';

import './App.css';
import Menu from './components/Menu';
import { Content } from './components/Content';

const darky = new Darky();

export default class App extends Component {
  state = { searchValue: '' };

  componentDidMount = () => darky.auto();
  getValue = value => this.setState({ searchValue: value });

  render() {
    return (
      <Router basename={'/Muzika'}>
        <React.Fragment>
          <Menu dataSearch={this.getValue} />
          <Content value={this.state.searchValue} />
        </React.Fragment>
      </Router>
    );
  }
}
