import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from './action-types';

// function* doLoginSaga(action) {
//   try {
//     const result = yield call(doLogin, action.payload);
//     yield put({type: ActionTypes.DO_LOGIN_SUCCESS, result});
//   } catch (error) {
//     console.log('Do Login Error', error);
//     yield put({type: ActionTypes.DO_LOGIN_ERROR, error});
//   }
// }

export default function* watchUserSaga() {
  // yield takeEvery(ActionTypes.DO_LOGIN_REQUEST, doLoginSaga);
}
