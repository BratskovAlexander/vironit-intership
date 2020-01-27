import {
  SET_AUTHORIZATION_USER_COMPLETED,
  UPDATE_USER,
  DELETE_USER,
  SET_USER,
  AXIOS_AUTHORIZATION_USER_START
} from "../const/const";
import service from "../service/service";

// export const getUser = () => async (dispatch: any) => {
//   if (sessionStorage.getItem("access-token")) {
//     const getAuthorizationUser = await service.getAuthorizationUser();
//     if (getAuthorizationUser) {
//       dispatch({
//         type: SET_USER,
//         payload: getAuthorizationUser
//       });
//     } else {
//       console.log("error in getUserAction getUser");
//     }
//   }
// };


export const getTokenOne = (one: any) => {
  return {
    type: 'SET_TOKEN',
    payload: one
  }
}

export const errorUserAccess = () => {
  return {
    type: 'AXIOS_AUTHORIZATION_USER_ERROR',
    payload: undefined
    
  }
}

export const getAuthorizationUser = (body: any) => {
  return {
    type: AXIOS_AUTHORIZATION_USER_START,
    payload: body
  }

  // const authorizationUser = await service.authorizationUser(body);
  // if (authorizationUser /*|| body === undefined*/) {
  //   sessionStorage.setItem("access-token", authorizationUser.access_token);
  //   localStorage.setItem("refresh-token", authorizationUser.refresh_token);
  //   dispatch({
  //     type: SET_AUTHORIZATION_USER,
  //     payload: authorizationUser.userProfile
  //   });
  // } else {
  //   console.log("error in getUserAction getAuthorizationUser");
  // }
};

  export const setAuthorizationUser = (userProfile: any) => {
    return{
      type: SET_AUTHORIZATION_USER_COMPLETED,
      payload: userProfile
    }
  }




export const updateUser = (id: any, body: any) => {
  // const updateUser = await service.updateUser(id, body);
  // if (updateUser) {
  //   dispatch({
  //     type: UPDATE_USER,
  //     payload: updateUser
  //   });
  // } else {
  //   console.log("error in getUserAction updateUser");
  // }
};

export const deleteUser = (id: any) => {
  // const deleteUser = await service.deleteUser(id);
  // if (deleteUser) {
  //   sessionStorage.removeItem("access-token");
  //   localStorage.removeItem("refresh-token");
  //   dispatch({
  //     type: DELETE_USER
  //   });
  // } else {
  //   console.log("error in getUserAction deleteUser");
  // }
};
