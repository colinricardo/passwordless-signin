import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import auth from './api/firebase';
import * as routes from './constants/routes';
import withAuthentication from './components/withAuthentication';
import Landing from './components/Landing';
import Home from './components/Home';
import Profile from './components/Profile';
import PageNotFound from './components/NotFound';
import HandleSignIn from './components/HandleSignIn';
import Navigation from './components/Navigation';

const App = ({ user }) => {
  if (user === undefined) {
    return 'Loading..';
  }

  return (
    <BrowserRouter>
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route exact path={routes.LANDING} render={() => <Landing />} />
          <Route exact path={routes.HOME} render={() => <Home />} />
          <Route exact path={routes.PROFILE} render={() => <Profile />} />
          <Route exact path={routes.HANDLE_SIGN_IN} render={() => <HandleSignIn />} />
          <Route render={() => PageNotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

App.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.sessionState.user,
});

export default withAuthentication(connect(mapStateToProps)(App));
