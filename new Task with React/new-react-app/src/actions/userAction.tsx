import { SET_USER } from "../const/conts";

export function getUser(user: any) {
    return {
      type: SET_USER,
      payload: user,
    }
  }