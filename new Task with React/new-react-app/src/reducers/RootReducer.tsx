import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";
import { allUsersReducer } from "./allUsersReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    users: allUsersReducer
})