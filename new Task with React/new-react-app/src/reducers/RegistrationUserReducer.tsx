import { SET_REGISTRATION_USERS } from "../const/const";

export const initialState = {
    registrationUserData: {
    name: "",
    surname: "",
    login: "",
    password: "",
    cityID: ""
  }
};

export const registrationUserReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_REGISTRATION_USERS:
      return { ...state, registrationUserData: action.payload };

    default:
      return state;
  }
};
