import { combineReducers } from 'redux';

import authReducer from './authReducer';
import profileReducer from './profileReducer';
import messageBoxReducer from './messageBoxReducer';
import discoverReducer from './discoverReducer';

export default combineReducers({
  user: authReducer,
  profile: profileReducer,
  messageBox: messageBoxReducer,
  discover: discoverReducer,
});
