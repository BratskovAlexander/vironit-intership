import { SET_USER } from "../const/conts";

export const initialState = {
  user: undefined
};

export const userReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
