import {
  SET_AUTHORIZATION_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_USER
} from "../const/const";
import service from "../service/service";

export const getUser = () => async (dispatch: any) => {
  const getAuthorizationUser = await service.getAuthorizationUser();
  if (getAuthorizationUser) {
    dispatch({
      type: SET_USER,
      payload: getAuthorizationUser
    });
  } else {
    console.log("error in getUserAction getUser");
  }
};

export const getAuthorizationUser = (body: any) => async (dispatch: any) => {
  const authorizationUser = await service.authorizationUser(body);
  if (authorizationUser || body === undefined) {
    sessionStorage.setItem("access-token", authorizationUser.access_token);
    localStorage.setItem("refresh-token", authorizationUser.refresh_token);
    dispatch({
      type: SET_AUTHORIZATION_USER,
      payload: authorizationUser.userProfile
    });
  } else {
    console.log("error in getUserAction getAuthorizationUser");
  }
};

export const updateUser = (id: any, body: any) => async (dispatch: any) => {
  const updateUser = await service.updateUser(id, body);
  if (updateUser) {
    dispatch({
      type: UPDATE_USER,
      payload: updateUser
    });
  } else {
    console.log("error in getUserAction updateUser");
  }
};

export const deleteUser = (id: any) => async (dispatch: any) => {
  const deleteUser = await service.deleteUser(id);
  if (deleteUser) {
    sessionStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    dispatch({
      type: DELETE_USER
    });
  } else {
    console.log("error in getUserAction deleteUser");
  }
};
