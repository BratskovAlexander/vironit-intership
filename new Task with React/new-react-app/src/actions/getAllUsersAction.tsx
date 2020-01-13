import { SET_ALL_USERS } from "../const/const";
import service from "../service/service";

// export function getAllUsers(users: any) {
//   return {
//     type: SET_ALL_USERS,
//     payload: users
//   };
// }

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
    console.log("error");
  }
};