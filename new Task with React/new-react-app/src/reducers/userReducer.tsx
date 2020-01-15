import { SET_USER, UPDATE_USER, DELETE_USER, SET_AUTHORIZATION_USER } from "../const/const";

export const initialState = {
  user: {
    name: "",
    surname: "",
    login: "",
    password: "",
    cityID: ""
  }
};

export const userReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_AUTHORIZATION_USER:
      return { ...state };
    case SET_USER:
      return { ...state, user: action.payload };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    case DELETE_USER:
      return { ...state };
    default:
      return state;
  }
};
