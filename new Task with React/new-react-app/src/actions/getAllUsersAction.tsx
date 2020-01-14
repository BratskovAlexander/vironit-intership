import { SET_ALL_USERS } from "../const/const";
import service from "../service/service";

export const getAllUsers = () => async (dispatch: any) => {
  try {
    const getAllUsers = await service.getAllUsers();
    if (getAllUsers) {
      dispatch({
        type: SET_ALL_USERS,
        payload: getAllUsers
      });
    }
  } catch (error) {
    console.log("error in getAllUsersAction");
  }
};