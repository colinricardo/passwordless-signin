import React from 'react';
import { sendSignInLink } from '../api/session';
import withAntiAuthorization from './withAntiAuthorization';

class Landing extends React.Component {
  state = {
    email: '',
    result: '',
  };

  handleChange = (e) => {
    const email = e.target.value;

    this.setState({
      email,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    sendSignInLink(this.state.email)
      .then((res) => {
        this.setState({
          result: res,
        });
      })
      .catch((err) => {
        this.setState({
          result: err.message,
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Landing page</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            Sign in with your email:
            <input
              value={this.state.email}
              onChange={this.handleChange}
              id="email"
              type="text"
              name="email"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.result}
      </React.Fragment>
    );
  }
}

const authCondition = user => user;
export default withAntiAuthorization(authCondition)(Landing);
