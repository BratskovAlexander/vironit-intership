import { SET_ALL_USERS } from "../const/conts";

export const initialState = {
  users: "undefined"
};

export const allUsersReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};
