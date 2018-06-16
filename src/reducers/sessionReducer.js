import * as types from '../actions/types';

const INITIAL_STATE = {
  user: undefined,
};

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.USER_SET:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default sessionReducer;
