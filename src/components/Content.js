import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from '../containers/Welcome';
import Search from '../containers/Search';
import Album from '../containers/Album';
import Artist from '../containers/Artist';
import Song from '../containers/Song';
import Video from '../containers/Video';
import More from '../containers/More';

export default class Content extends Component {
  state = { redirect: false };

  componentWillReceiveProps(newProps) {
    if (newProps.value !== '') this.setState({ redirect: true, home: false });
    else this.setState({ redirect: false, home: true });
  }

  render() {
    return (
      <Switch>
        {this.state.redirect ? <Redirect exact from="/" to="/search" /> : null}
        {this.state.home ? <Redirect exact from="/search" to="/" /> : null}

        <Route exact path="/" component={Welcome} />
        <Route
          exact
          path="/search"
          render={props => <Search {...props} value={this.props.value} />}
        />
        <Route exact path="/search/:type" component={More} />
        <Route exact path="/album" render={() => <Redirect to="/" />} />
        <Route exact path="/album/:name/:id" component={Album} />
        <Route exact path="/music-video" render={() => <Redirect to="/" />} />
        <Route exact path="/music-video/:name/:id" component={Video} />
        <Route exact path="/artist" render={() => <Redirect to="/" />} />
        <Route exact path="/artist/:name/:id" component={Artist} />
        <Route exact path="/artist/:name/:id/:type" component={More} />
        <Route exact path="/song" render={() => <Redirect to="/" />} />
        <Route exact path="/song/:name/:id" component={Song} />
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}
