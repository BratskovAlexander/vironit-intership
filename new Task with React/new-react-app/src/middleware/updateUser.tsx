import service from "../service/service";
import { call, put } from "redux-saga/effects";
import { errorUserAccess } from "../actions/userAction";

function requestUpdateUser(id: any, body: any) {
  return service.updateUser(id, body);
}

function* updateUser(action: {payload: string, type: string}) {
  let obj: any = action.payload;
  try {
   yield call(requestUpdateUser, obj.id, obj.body);
  } catch (error) {
    yield put(errorUserAccess());
  }
}

export default updateUser;
