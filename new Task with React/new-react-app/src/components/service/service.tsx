import axios from "axios";

const service = {
  getAllUsers: () => {
    axios
      .get("http://localhost:3030/users", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export default service;
