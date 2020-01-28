import service from "../service/service";
import { call, put } from "redux-saga/effects";
import { getListAllCities, errorCitiesAccess } from "../actions/citiesAction";

function requestAllCities() {
  return service.getCity();
}

function* getAllCities() {
  try {
    const allCities = yield call(requestAllCities);
    if (allCities) {
      yield put(getListAllCities(allCities));
    }
  } catch (error) {
    yield put(errorCitiesAccess());
  }
}

export default getAllCities;
