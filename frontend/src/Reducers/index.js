import { combineReducers } from 'redux';

import authReducer from './authReducer';
import profileReducer from './profileReducer';
import messageBoxReducer from './messageBoxReducer';
import discoverReducer from './discoverReducer';
import chatReducer from './chatReducer';

export default combineReducers({
  user: authReducer,
  profile: profileReducer,
  messageBox: messageBoxReducer,
  discover: discoverReducer,
  chat: chatReducer,
});
