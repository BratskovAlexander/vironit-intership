import { GET_TOKENS } from "../const/const";

export const initialState = {
    tokens: {
        access_token: "",
        refresh_token: ""
      }
};

export const getTokensReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_TOKENS:
      return { ...state };
    default:
      return state;
  }
};