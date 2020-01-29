import service from "../service/service";
import { call, put } from "redux-saga/effects";
import { errorUserAccess } from "../actions/userAction";

function requestUpdateUser(id: any, body: any) {
  return service.updateUser(id, body);
}

function* updateUser(action: {payload: string, type: string}) {
  let obj: any = action.payload;
    console.log(obj.id, obj.body);
  try {
   yield call(requestUpdateUser, obj.id, obj.body);
//   if (updateU) {
    //   yield put(getUpdateUser(payload.id, payload.body));
//   }
    // yield call(requestUpdateUser, id, body);
    //   if (updateUser) {
    //     yield put(getUserAction(user));
    //   }
  } catch (error) {
    yield put(errorUserAccess());
  }
}

export default updateUser;
