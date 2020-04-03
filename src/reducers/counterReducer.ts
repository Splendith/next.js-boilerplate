import { ActionTypes } from '../actions/counter';

const defaultState = {
  count: 0,
  countPersist: 0,
};
export default function(state = defaultState, action: ActionTypes) {
  switch (action.type) {
    case 'COUNTER_ADD_COUNT':
      return {
        ...state,
        count: state.count + 1,
        countPersist: state.countPersist + 1,
      };
    case 'COUNTER_CLEAR_COUNT':
      return {
        ...state,
        count: 0,
        countPersist: 0,
      };
    default:
      return state;
  }
}
