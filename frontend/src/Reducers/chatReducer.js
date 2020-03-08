import { chatAction } from '../Actions';

const initialState = {
  users: [],
};

const chatReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case chatAction.CHAT_SAVE_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
