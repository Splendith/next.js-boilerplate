import { Action } from 'redux';

export interface ActionTypes extends Action<'STATUS_PERSIST_LOAD_SUCCESS'> {}

export const loadSuccess = () => ({ type: 'STATUS_PERSIST_LOAD_SUCCESS' });
