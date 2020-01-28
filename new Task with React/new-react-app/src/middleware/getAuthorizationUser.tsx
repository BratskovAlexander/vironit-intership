import service from "../service/service";
import { call, put } from "redux-saga/effects";
import { setAuthorizationUser, errorUserAccess } from "../actions/userAction";

function getUser(payload: any) {
  return service.authorizationUser(payload);
}

function* getAuthorizationUser(body: any) {
  try {
    const user = yield call(getUser, body.payload);
    if (user) {
      sessionStorage.setItem("access-token", user.access_token);
      localStorage.setItem("refresh-token", user.refresh_token);
      yield put(setAuthorizationUser(user.userProfile));
    }
  } catch (error) {
      yield put(errorUserAccess());
  }
}

export default getAuthorizationUser;
