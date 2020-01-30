import service from "../service/service";
import { call, put } from "redux-saga/effects";
import { errorUserAccess } from "../actions/userAction";

function requestDeleteUser(id: any) {
  return service.deleteUser(id);
}

function* deleteUser(action: { payload: string; type: string }) {
  try {
    yield call(requestDeleteUser, action.payload);
  } catch (error) {
    yield put(errorUserAccess());
  }
}

export default deleteUser;
