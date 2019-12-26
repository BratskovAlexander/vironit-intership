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

  getAllUsers: async () => {
    const getAllUsers = await axios.get("http://localhost:3030/users", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    return getAllUsers.data;
  },

  registrationUser: async (body: any) => {
    const registration = await axios.post(
      "http://localhost:3030/users",
      qs.stringify(body),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    return registration.data;
  },

  authorizationUser: async (body: any) => {
    const authorization = await axios.post(
      "http://localhost:3030/users/login",
      qs.stringify(body),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    return authorization.data;
  },

  getAuthorizationUser: async () => {
    const getAuthorizationUser = await axios.get(
      `http://localhost:3030/users/user`,
      {
        headers: {
          Authorization: sessionStorage.getItem("access-token")
        }
      }
    );
    return getAuthorizationUser.data[0];
  },

  getTokens: async (token: any) => {
    console.log(token);
    const getTokens = await axios.get(
      `http://localhost:3030/users/token`,
      {
        headers: {
          Authorization: token
        }
      }
    );
    console.log(getTokens.data.access_token);
    return getTokens.data;
  },

  updateUser: async (id: any, body: any) => {
    const updateUser = await axios.put(
      `http://localhost:3030/users/${id}`,
      qs.stringify(body),
      {
        headers: {
          Authorization: sessionStorage.getItem("access-token")
        }
      }
    );
    return updateUser.data;
  },

  deleteUser: async (id: any) => {
    const updateUser = await axios.delete(`http://localhost:3030/users/${id}`, {
      headers: {
        Authorization: sessionStorage.getItem("access-token")
      }
    });

    return updateUser.data;
  }
};

export default service;
