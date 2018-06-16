import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Navigation = () => {
  const temp = [routes.HOME, routes.PROFILE];

  return temp.map(r => (
    <li key={r}>
      <Link href="#" to={r}>
        {r}
      </Link>
    </li>
  ));
};

export default Navigation;
