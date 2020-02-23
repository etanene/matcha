import { discoverAction } from '../Actions';

const initialState = {
  loading: false,
  users: [],
};

const discoverReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case discoverAction.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case discoverAction.DISCOVER_SAVE_USERS:
      console.log('patload,', payload);
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};

export default discoverReducer;