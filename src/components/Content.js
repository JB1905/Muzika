import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../containers/Home';
import Search from '../containers/Search';
import Album from '../containers/Album';
import Artist from '../containers/Artist';
import Song from '../containers/Song';
import Video from '../containers/Video';

export const Content = ({ value }) => {
  let query;

  if (value !== '' && window.location.pathname !== '') {
    query = <Redirect to={`/search/${value}`} />;
  } else if (value === '' && window.location.pathname === '') {
    query = <Redirect to={`/`} />;
  }

  return (
    <Switch>
      {query}
      <Route exact path="/" component={Home} />
      <Route exact path="/search/:query" component={Search} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/album" render={() => <Redirect to="/" />} />
      <Route exact path="/album/:name/:id" component={Album} />
      <Route exact path="/music-video" render={() => <Redirect to="/" />} />
      <Route exact path="/music-video/:name/:id" component={Video} />
      <Route exact path="/artist" render={() => <Redirect to="/" />} />
      <Route exact path="/artist/:name/:id" component={Artist} />
      <Route exact path="/song" render={() => <Redirect to="/" />} />
      <Route exact path="/song/:name/:id" component={Song} />
    </Switch>
  );
};
