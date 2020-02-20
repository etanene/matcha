import { discoverAction } from '../Actions';

const initialState = {
  loading: false,
};

const discoverReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case discoverAction.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

export default discoverReducer;
