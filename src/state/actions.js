import { ActionTypes } from './action-types';

export const doSetUserData = data => {
  return { type: ActionTypes.SET_USER_DATA, payload: data };
};

export const doUserLogOut = () => {
  return { type: ActionTypes.DO_USER_LOGOUT };
};
