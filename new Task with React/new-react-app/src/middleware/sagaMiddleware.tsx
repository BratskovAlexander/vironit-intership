import {
    AXIOS_AUTHORIZATION_USER_START,
    AXIOS_UPDATE_USER,
    DELETE_USER,
    SET_USER,
    SET_ALL_USERS,  
    GET_TOKENS,
    AXIOS_ALL_CITIES
  } from "../const/const";
  import { takeEvery } from 'redux-saga/effects'
import getAuthorizationUser from "./getAuthorizationUser";
import getUser from "./getUser";
import getAllCities from "./getAllCities";
import deleteUser from "./deleteUser";
import updateUser from "./updateUser";


function* mySaga() {
  yield takeEvery(AXIOS_AUTHORIZATION_USER_START, getAuthorizationUser);
  yield takeEvery(SET_USER, getUser);
  yield takeEvery(AXIOS_UPDATE_USER, updateUser);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeEvery(SET_ALL_USERS, getToken);
  yield takeEvery(AXIOS_ALL_CITIES, getAllCities);
  yield takeEvery(GET_TOKENS, getToken);
}

export default mySaga;

export const getToken = () => {

}