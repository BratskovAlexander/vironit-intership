import { SET_ALL_USERS } from "../const/conts";

export function getAllUsers(users: any) {
  return {
    type: SET_ALL_USERS,
    payload: users
  };
}
