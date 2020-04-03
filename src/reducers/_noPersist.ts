import { combineReducers } from 'redux';

import statusReducer from './statusReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  status: statusReducer,
  counter: counterReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
