import { combineReducers } from 'redux';

import statusReducer from './statusReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  status: statusReducer,
  test: counterReducer,
});

export default rootReducer;
