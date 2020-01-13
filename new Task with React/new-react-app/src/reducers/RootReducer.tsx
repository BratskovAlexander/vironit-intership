import { combineReducers } from "redux";
import { getUserReducer } from "./GetUserReducer";
import { getAllUsersReducer } from "./GetAllUsersReducer";
import { registrationUserReducer } from "./RegistrationUserReducer";
import { authorizationUserReducer } from "./authorizationUserReducer";

export const rootReducer = combineReducers({
    registrationUserData: registrationUserReducer,
    authorizationUserData: authorizationUserReducer,
    userData: getUserReducer,
    usersData: getAllUsersReducer
})