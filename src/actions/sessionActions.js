import * as types from './types';

export const setUserAction = user => ({
  type: types.USER_SET,
  payload: user,
});
