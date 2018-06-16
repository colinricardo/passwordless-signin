import React from 'react';
import withAuthorization from './withAuthorization';

const Home = () => <h1>Home page</h1>;

const authCondition = user => !!user;
export default withAuthorization(authCondition)(Home);
