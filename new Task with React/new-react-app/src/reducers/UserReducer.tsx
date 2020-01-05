// import service from "../service/service";

// const getAuthorizationUser = async () => {
//   await service.getAuthorizationUser();
//   // const getAuthorizationUser: any = ;
//   // console.log(getAuthorizationUser);
//   // return getAuthorizationUser.login;
// };

export const initialState = {
  user: {
    name: "Саня",
    surname: "Брацков"
  }
};

export const userReducer = (state: any = initialState) => {
  return state;
};
