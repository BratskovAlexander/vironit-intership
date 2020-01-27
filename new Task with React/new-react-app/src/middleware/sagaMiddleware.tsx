import {
    AXIOS_AUTHORIZATION_USER_START,
    UPDATE_USER,
    DELETE_USER,
    SET_USER,
    SET_ALL_USERS,
    SET_ALL_CITIES,
    GET_TOKENS
  } from "../const/const";
  import { takeEvery } from 'redux-saga/effects'
import getAuthorizationUser from "./getAuthorizationUser";


function* mySaga() {
  yield takeEvery(AXIOS_AUTHORIZATION_USER_START, getAuthorizationUser);
  yield takeEvery(UPDATE_USER, getToken);
  yield takeEvery(DELETE_USER, getToken);
  yield takeEvery(SET_USER, getToken);
  yield takeEvery(SET_ALL_USERS, getToken);
  yield takeEvery(SET_ALL_CITIES, getToken);
  yield takeEvery(GET_TOKENS, getToken);
}

export default mySaga;

export const getToken = () => {

}