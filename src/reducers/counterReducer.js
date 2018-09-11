import { actionTypes } from '../actions/counter';

const defaultState = {
  count: 0,
  countPersist: 0,
};
export default function(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.COUNTER_ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
        countPersist: state.countPersist + 1,
      };
    case actionTypes.COUNTER_CLEAR_COUNT:
      return {
        ...state,
        count: 0,
        countPersist: 0,
      };
    default:
      return state;
  }
}
