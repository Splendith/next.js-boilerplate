import { actionTypes } from '../actions/status';

export default (state = { loaded: false }, action) => {
  switch (action.type) {
    case actionTypes.STATUS_PERSIST_LOAD_SUCCESS:
      return { loaded: true };

    default:
      return state;
  }
};
