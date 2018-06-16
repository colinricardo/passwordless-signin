import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withAuthorization from './withAuthorization';
import { signOut } from '../api/session';

const Profile = ({ user }) => {
  const { email } = user;

  return (
    <React.Fragment>
      <h1>Profile page</h1>
      Signed in as: {email}
      <br />
      <button onClick={signOut}>Sign out</button>
    </React.Fragment>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.sessionState.user,
});

const temp = connect(mapStateToProps)(Profile);
const authCondition = user => !!user;
export default withAuthorization(authCondition)(temp);
