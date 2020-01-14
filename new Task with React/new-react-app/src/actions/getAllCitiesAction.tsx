import { SET_ALL_CITIES } from "../const/const";
import service from "../service/service";

export const getAllCities = () => async (dispatch: any) => {
  try {
    const getCity = await service.getCity();
    if (getCity) {
      dispatch({
        type: SET_ALL_CITIES,
        payload: getCity
      });
    }
  } catch (error) {
    console.log("error in getAllCitiesAction");
  }
};