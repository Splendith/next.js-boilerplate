import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import StatusReducer from './reducer_status';
import CounterReducer from './reducer_counter';

const testPersistConfig = {
  key: 'test',
  storage,
  whitelist: ['countPersist'],
};

const rootReducer = combineReducers({
  status: StatusReducer,
  test: persistReducer(testPersistConfig, CounterReducer),
});

export default rootReducer;
