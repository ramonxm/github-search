import axios from "axios";

const baseURL = "https://api.github.com/users";
const getUser = async (user) => {
  try {
    const request = await axios.get(`${baseURL}/${user}`);
    const response = request;
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export { getUser };
