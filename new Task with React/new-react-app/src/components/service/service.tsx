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

  registration: (body: any) => {
    axios.post("http://localhost:3030/users", qs.stringify(body), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
};

export default service;
