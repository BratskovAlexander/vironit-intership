import service from "../service/service";
import { call, put } from "redux-saga/effects";
import { errorUserAccess, getUserAction } from "../actions/userAction";

function getOneUser() {
  return service.getAuthorizationUser();
}

function* getUser() {
  try {
    if (localStorage.getItem("refresh-token")) {
      const user = yield call(getOneUser);
      if (user) {
        yield put(getUserAction(user));
      }
    }
  } catch (error) {
    yield put(errorUserAccess());
  }
}

export default getUser;
