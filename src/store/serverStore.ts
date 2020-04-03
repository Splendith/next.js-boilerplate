import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/_noPersist';

const makeServerStore = (initialState: any) =>
  createStore(reducers, initialState, applyMiddleware(thunk));

export default makeServerStore;
