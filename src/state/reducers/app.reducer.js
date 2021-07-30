import { ActionTypes } from '../action-types';

const initialState = {
  userDataResult: null,
  isUserLoggedIn: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        userDataResult: action.payload,
      };
    case ActionTypes.DO_USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
}
export default appReducer;
