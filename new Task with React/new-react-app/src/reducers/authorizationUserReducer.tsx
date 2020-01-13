import { SET_AUTHORIZATION_USER } from "../const/const";

export const initialState = {
  userProfile: undefined,
  authorizationUserData: {
    access_token: "",
    refresh_token: ""
  }
};

export const authorizationUserReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTHORIZATION_USER:
      return { ...state, userProfile: action.payload };
    default:
      return state;
  }
};
