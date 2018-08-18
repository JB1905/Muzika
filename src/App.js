import React from 'react';
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

export const App = () => {
  darky.auto();

  return (
    <Router basename={'/Muzika'}>
      <React.Fragment>
        <div className="main">
          <Content />
        </div>

        <Menu />
      </React.Fragment>
    </Router>
  );
};
