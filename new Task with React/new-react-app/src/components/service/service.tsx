import axios from "axios";
import qs from "querystring";

const service = {
  getCity: async () => {
  const getCity = await axios.get("http://localhost:3030/cities", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    return getCity.data;
  },

  registration: async (body: any) => {
    const registration = await axios.post("http://localhost:3030/users", qs.stringify(body), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    return registration.data
  },

  authorization: async (body: any) => {
    const authorization = await axios.post("http://localhost:3030/users/login", qs.stringify(body), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    return authorization.data;
  },

  getAuthorizationUser: async (login: string, jwtToken: string) => {
    const getAuthorizationUser = await axios.get(`http://localhost:3030/users/user`, {
      headers: {
        Authorization: jwtToken
      }
    });
    console.log(getAuthorizationUser.data[0]);
    return getAuthorizationUser.data[0];
  }



};

export default service;
