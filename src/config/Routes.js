import React, { Component } from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import ApplicationLayout from './../views/layouts/Application';
import HomeView from './../views/home/';

const history = useRouterHistory(createHistory)({
  basename: '/',
});

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route component={ApplicationLayout}>
          <Route path="/" component={HomeView} />
        </Route>
      </Router>
    );
  }
}
