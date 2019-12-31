import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";
import { citiesReducer } from "./citiesReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    city: citiesReducer
})