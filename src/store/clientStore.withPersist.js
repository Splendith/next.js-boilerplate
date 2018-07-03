import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from '../reducers/_persist';
import { loadSuccess } from '../actions/status';

export default (initialState) => {
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

  /* const ps = */ persistStore(store, null, () => {
    store.dispatch(loadSuccess());
  });

  // Clear all persist store data
  // ps.purge()

  return store;
};
