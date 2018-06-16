/* global window, localStorage, alert */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import withAntiAuthorization from './withAntiAuthorization';
import { signIn } from '../api/session';

class HandleSignIn extends React.Component {
  componentDidMount() {
    const url = window.location.href;

    let email = JSON.parse(localStorage.getItem('emailForSignIn'));

    if (!email) {
      email = window.prompt('Please confirm your email.');
    }

    signIn(email, url)
      .then((res) => {
        alert(res);
        this.props.history.push('/home');
      })
      .catch((err) => {
        alert(err.message);
        this.props.history.push('/');
      });
  }

  render() {
    return 'Signing you in..';
  }
}

HandleSignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

HandleSignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

const authCondition = user => user;
export default withAntiAuthorization(authCondition)(withRouter(HandleSignIn));
