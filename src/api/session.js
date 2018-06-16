/* global localStorage */
import auth from './firebase';
import * as routes from '../constants/routes';
import { INVALID_EMAIL, NETWORK_FAIL, ARG_ERROR, INVALID_ACTION_CODE } from '../constants/errors';

const { REACT_APP_DOMAIN } = process.env;

const actionCodeSettings = {
  url: `${REACT_APP_DOMAIN}${routes.HANDLE_SIGN_IN}`,
  handleCodeInApp: true,
};

export const sendSignInLink = email =>
  new Promise((res, rej) => {
    auth
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(() => {
        localStorage.setItem('emailForSignIn', JSON.stringify(email));
        res('Success! Check your email 😎');
      })
      .catch((err) => {
        if (err.code === INVALID_EMAIL) {
          rej(Error('Please enter a valid email.'));
        } else if (err.code === NETWORK_FAIL) {
          rej(Error('Eek – there was a network error!'));
        } else {
          rej(Error(err));
        }
      });
  });

export const signIn = (email, url) =>
  new Promise((res, rej) => {
    auth
      .signInWithEmailLink(email, url)
      .then(() => {
        res('Signed in successfully!');
      })
      .catch((err) => {
        if (err.code === ARG_ERROR) {
          rej(Error('The sign in link is invalid. Redirecting..'));
        } else if (err.code === INVALID_ACTION_CODE) {
          rej(Error('That link has been used already, or has expired. Redirecting..'));
        } else {
          rej(Error(err));
        }
      });
  });

export const signOut = () =>
  new Promise((res, rej) => {
    auth
      .signOut()
      .then(() => {
        res('Signed out successfully!');
      })
      .catch(() => {
        rej(Error('There was a problem signing you out.'));
      });
  });
