import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import auth from '../api/firebase';
import { setUserAction } from '../actions/sessionActions';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { setUserAction } = this.props;

      auth.onAuthStateChanged((user) => {
        if (user) {
          setUserAction(user);
        } else {
          setUserAction(null);
        }
      });
    }

    render() {
      return <Component />;
    }
  }

  WithAuthentication.propTypes = {
    setUserAction: PropTypes.func.isRequired,
  };

  return connect(null, { setUserAction })(WithAuthentication);
};

export default withAuthentication;
