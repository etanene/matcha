import { authAction } from '../Actions';
import { userService } from '../Services';

const user = userService.getUser();

const initialState = user ? user.username : '';

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authAction.LOGIN_SUCCESS:
      return action.username;
    case authAction.LOGIN_LOGOUT:
      return '';
    default:
      return state;
  }
};

export default authReducer;
