import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { getAllUsersReducer } from "./GetAllUsersReducer";
import { citiesReducer } from "./citiesReducer";

export const rootReducer = combineReducers({
    userData: userReducer,
    listAllUsers: getAllUsersReducer,
    listAllCities: citiesReducer
})