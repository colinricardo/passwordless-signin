import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import auth from '../api/firebase';
import * as routes from '../constants/routes';

// This HOC redirects to the LANDING route if the condition isn't true.
// It's mainly used to redirect to the LANDING route if the user isn't signed in.
const withAuthorization = (condition, route = routes.LANDING) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (!condition(user)) {
          this.props.history.push(route);
        }
      });
    }

    render() {
      return this.props.user ? <Component /> : null;
    }
  }

  WithAuthorization.propTypes = {
    user: PropTypes.object,
    history: PropTypes.object.isRequired,
  };

  const mapStateToProps = state => ({
    user: state.sessionState.user,
  });

  const temp = connect(mapStateToProps)(WithAuthorization);
  return withRouter(temp);
};

export default withAuthorization;
