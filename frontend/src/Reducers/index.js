import { combineReducers } from 'redux';

import authReducer from './authReducer';
import messageBoxReducer from './messageBoxReducer';

export default combineReducers({
  user: authReducer,
  messageBox: messageBoxReducer,
});
