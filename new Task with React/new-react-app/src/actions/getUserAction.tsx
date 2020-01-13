import { SET_USER, SET_AUTHORIZATION_USER } from "../const/const";
import service from "../service/service";

export const getUser = (body: any) => async (dispatch: any) => {
  // try {
  //   const getAuthorizationUser = await service.getAuthorizationUser();
  //   if (getAuthorizationUser) {
  //     dispatch({
  //       type: SET_USER,
  //       payload: getAuthorizationUser
  //     });
  //   }
  // } catch (error) {
  //   console.log("error");
  // }
  if (body === undefined) {
    const getAuthorizationUser = await service.getAuthorizationUser();
    console.log(getAuthorizationUser);
    if (getAuthorizationUser) {
      dispatch({
        type: SET_USER,
        payload: getAuthorizationUser
      });
    }
  }
  const authorizationUser = await service.authorizationUser(body);
  if (authorizationUser) {
    sessionStorage.setItem("access-token", authorizationUser.access_token);
    localStorage.setItem("refresh-token", authorizationUser.refresh_token);
    dispatch({
      type: SET_AUTHORIZATION_USER,
      payload: authorizationUser.userProfile
    });
  }
};
