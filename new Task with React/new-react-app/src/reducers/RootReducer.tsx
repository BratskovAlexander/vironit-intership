import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { getAllUsersReducer } from "./GetAllUsersReducer";
import { getAllCitiesReducer } from "./getAllCities";

export const rootReducer = combineReducers({
    userData: userReducer,
    usersData: getAllUsersReducer,
    allCities: getAllCitiesReducer
})