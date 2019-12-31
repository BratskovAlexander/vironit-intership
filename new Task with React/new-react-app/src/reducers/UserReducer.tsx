// import service from "../service/service";

// const getAuthorizationUser = async () => {
//   const getAuthorizationUser: any = await service.getAuthorizationUser();
//   console.log(getAuthorizationUser);
//   return getAuthorizationUser;
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
