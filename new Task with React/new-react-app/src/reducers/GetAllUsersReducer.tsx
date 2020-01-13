import { SET_ALL_USERS } from "../const/const";

export const initialState = {
  users: []
};

export const getAllUsersReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};