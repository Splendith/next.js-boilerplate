import { ActionTypes } from '../actions/status';

export default (state = { loaded: false }, action: ActionTypes) => {
  switch (action.type) {
    case 'STATUS_PERSIST_LOAD_SUCCESS':
      return { loaded: true };

    default:
      return state;
  }
};
