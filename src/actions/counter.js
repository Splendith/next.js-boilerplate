export const actionTypes = {
  COUNTER_ADD_COUNT: 'COUNTER_ADD_COUNT',
  COUNTER_CLEAR_COUNT: 'COUNTER_CLEAR_COUNT',
};

export const addCount = () => ({
  type: actionTypes.COUNTER_ADD_COUNT,
  payload: null,
});

export const clearCount = () => ({
  type: actionTypes.COUNTER_CLEAR_COUNT,
  payload: null,
});
