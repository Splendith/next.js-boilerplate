import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/_noPersist';

export default initialState => createStore(reducers, initialState, applyMiddleware(thunk));
