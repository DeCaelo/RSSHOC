import { combineReducers } from 'redux';
import authenticationReducer from ('./authentication');

const rootReducer = combineReducers({
  autenticated: authenticationReducer
});

export default rootReducer;
