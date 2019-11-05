import { combineReducers } from 'redux';
import groupReducer from './groupReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  item: groupReducer,
  error: errorReducer,
  auth: authReducer
});
