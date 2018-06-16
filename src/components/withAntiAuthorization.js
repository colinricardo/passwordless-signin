import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import auth from '../api/firebase';
import * as routes from '../constants/routes';

// This HOC redirects to the HOME route if the condition is true.
// It's mainly used to redirect to the HOME route from the LandingContainer and HandleSignInContainer.
const withAntiAuthorization = (condition, route = routes.HOME) => (Component) => {
  class WithAntiAuthorization extends React.Component {
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (condition(user)) {
          this.props.history.push(route);
        }
      });
    }

    render() {
      return !this.props.user ? <Component /> : null;
    }
  }

  WithAntiAuthorization.propTypes = {
    user: PropTypes.object,
    history: PropTypes.object.isRequired,
  };

  const mapStateToProps = state => ({
    user: state.sessionState.user,
  });

  const temp = connect(mapStateToProps)(WithAntiAuthorization);
  return withRouter(temp);
};

export default withAntiAuthorization;
