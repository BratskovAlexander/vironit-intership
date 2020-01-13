import { SET_REGISTRATION_USERS } from "../const/const";
import service from "../service/service";

export const registrationUser = (body: any) => async (dispatch: any) => {
  try {
    const registrationUser = await service.registrationUser(body);
    if (registrationUser) {
      dispatch({
        type: SET_REGISTRATION_USERS,
        payload: registrationUser
      });
    }
  } catch (error) {
    console.log("error");
  }
};
