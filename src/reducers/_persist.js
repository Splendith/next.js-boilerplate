import { combineReducers } from 'redux';
import storage from 'localforage';
import { persistReducer } from 'redux-persist';

import statusReducer from './statusReducer';
import counterReducer from './counterReducer';

const testPersistConfig = {
  key: 'test',
  storage,
  whitelist: ['countPersist'],
};

const rootReducer = combineReducers({
  status: statusReducer,
  counter: persistReducer(testPersistConfig, counterReducer),
});

export default rootReducer;
