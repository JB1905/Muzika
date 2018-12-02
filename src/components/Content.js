import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './Main';

import Welcome from '../containers/Welcome';
import Search from '../containers/Search';
import More from '../containers/More';
import Song from '../containers/Song';
import Album from '../containers/Album';
import Video from '../containers/Video';
import Artist from '../containers/Artist';

const Content = () => (
  <Main>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/songs" component={More} />
      <Route exact path="/albums" component={More} />
      <Route exact path="/music-videos" component={More} />
      <Route exact path="/song" render={() => <Redirect to="/" />} />
      <Route exact path="/song/:name/:id" component={Song} />
      <Route exact path="/album" render={() => <Redirect to="/" />} />
      <Route exact path="/album/:name/:id" component={Album} />
      <Route exact path="/music-video" render={() => <Redirect to="/" />} />
      <Route exact path="/music-video/:name/:id" component={Video} />
      <Route exact path="/artist" render={() => <Redirect to="/" />} />
      <Route exact path="/artist/:name/:id" component={Artist} />
      <Route exact path="/artist/:name/:id/:type" component={More} />
      <Redirect from="*" to="/" />
    </Switch>
  </Main>
);

export default Content;
