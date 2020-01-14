import { SET_ALL_CITIES } from "../const/const";

export const initialState = {
  cities: []
};

export const getAllCitiesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_ALL_CITIES:
      return { ...state, cities: action.payload };

    default:
      return state;
  }
};