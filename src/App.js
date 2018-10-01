import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faPause,
  faSearch,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import Night from 'night.js';

import './App.css';

import { Content } from './components/Content';
import { Menu } from './components/Menu';

const night = new Night();

library.add(faPlay, faPause, faSearch, faHome);

export const App = () => {
  night.auto();

  return (
    <Router basename="/Muzika">
      <>
        <Content />
        <Menu />
      </>
    </Router>
  );
};
