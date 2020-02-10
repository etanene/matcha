import { messageBoxAction } from '../Actions';

const initialState = {
  isOpen: false,
  message: '',
  error: false,
};

const messageBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case messageBoxAction.MESSAGEBOX_CLOSE:
      return {
        isOpen: false,
        message: '',
      };
    case messageBoxAction.MESSAGEBOX_OPEN:
      return {
        isOpen: true,
        message: action.payload.message,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default messageBoxReducer;
