import service from "../service/service";
import { call, put } from "redux-saga/effects";
import { errorUserAccess } from "../actions/userAction";

function requestDeleteUser(id: any) {
  return service.deleteUser(id);
}

function* deleteUser(action: {payload: string, type: string}) {
  try {
 const delUser =  yield call(requestDeleteUser, action.payload);
if (delUser) {
    sessionStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    console.log("del token");
}
    // yield call(requestUpdateUser, id, body);
    //   if (updateUser) {
    //     yield put(getUserAction(user));
    //   }
  } catch (error) {
    yield put(errorUserAccess());
  }
}

export default deleteUser;
