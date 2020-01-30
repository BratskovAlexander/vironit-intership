import {
  SET_AUTHORIZATION_USER_COMPLETED,
  UPDATE_USER,
  AXIOS_UPDATE_USER,
  DELETE_USER,
  SET_USER,
  AXIOS_AUTHORIZATION_USER_START,
  AXIOS_AUTHORIZATION_USER_ERROR,
  GET_USER
} from "../const/const";

export const setUserAction = () => {
  return {
    type: SET_USER
  };
};

export const getUserAction = (user: any) => {
  return {
    type: GET_USER,
    payload: user
  };
};

export const errorUserAccess = () => {
  return {
    type: AXIOS_AUTHORIZATION_USER_ERROR,
    payload: undefined
  };
};

export const getAuthorizationUser = (body: any) => {
  return {
    type: AXIOS_AUTHORIZATION_USER_START,
    payload: body
  };
};

export const setAuthorizationUser = (userProfile: any) => {
  return {
    type: SET_AUTHORIZATION_USER_COMPLETED,
    payload: userProfile
  };
};



export const setUpdateUser = (id: any, body: any) => {
  return {
    type: AXIOS_UPDATE_USER,
    payload: {id, body}
  };
};


export const getUpdateUser = (id: any, body: any) => {
  return{
    type: UPDATE_USER,
    payload: {id, body}
  }
};

export const deleteUserAction = (id: any) => {
  return {
    type: DELETE_USER,
    payload: id
  }
};
