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

import Content from './components/Content';
import Menu from './components/Menu';

library.add(faPlay, faPause, faSearch, faHome);

export default function App() {
  const night = new Night();
  night.auto();

  return (
    <Router basename="/Muzika">
      <Content />
      <Menu />
    </Router>
  );
}
