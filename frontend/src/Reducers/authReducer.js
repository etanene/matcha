import { authAction, userAction } from '../Actions';
import { userService } from '../Services';

const user = userService.getUser();

const initialState = {
  isAuth: Boolean(user) || false,
  user,
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authAction.LOGIN_SUCCESS:
      return {
        isAuth: true,
        error: '',
        user: action.payload,
      };
    case authAction.LOGIN_LOGOUT:
      return {
        isAuth: false,
        error: '',
        user: null,
      };
    case authAction.LOGIN_ERROR:
      return {
        isAuth: false,
        error: action.payload,
        user: null,
      };
    case userAction.USER_RESET_ERROR:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

export default authReducer;
