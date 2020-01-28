import { SET_ALL_CITIES, AXIOS_ALL_CITIES, AXIOS_ALL_CITIES_ERROR } from "../const/const";

export const setAllCities = () => {
  return {
    type: AXIOS_ALL_CITIES
  }
}

export const getListAllCities = (allCities: any) => {
  return {
    type: SET_ALL_CITIES,
    payload: allCities
  }
}

export const errorCitiesAccess = () => {
  return {
    type: AXIOS_ALL_CITIES_ERROR,
    payload: undefined
  };
};