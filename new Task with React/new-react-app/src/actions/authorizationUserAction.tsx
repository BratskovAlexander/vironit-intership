import { SET_AUTHORIZATION_USER } from "../const/const";
import service from "../service/service";

export const authorizationUser = (body: any) => async (dispatch: any) => {
  try {
    const authorizationUser = await service.authorizationUser(body);
    console.log(authorizationUser)

    if (authorizationUser) {
      sessionStorage.setItem("access-token", authorizationUser.access_token);
      localStorage.setItem("refresh-token", authorizationUser.refresh_token);
      dispatch({
        type: SET_AUTHORIZATION_USER,
        payload: authorizationUser.userProfile
      });
    }
  } catch (error) {
    console.log("error");
  }
};
