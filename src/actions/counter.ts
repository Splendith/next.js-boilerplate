import { Action } from 'redux';

export interface ActionTypes extends Action<'COUNTER_ADD_COUNT' | 'COUNTER_CLEAR_COUNT'> {}

export const addCount = (): ActionTypes => ({
  type: 'COUNTER_ADD_COUNT',
});

export const clearCount = (): ActionTypes => ({
  type: 'COUNTER_CLEAR_COUNT',
});
