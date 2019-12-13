import axios from "axios";

const data = async () => {
  return await axios.get("http://localhost:3030/users", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};

export default data;
