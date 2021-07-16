import axios from "axios";

const baseURL = "https://api.github.com/users";

const getUser = async (user) => {
  try {
    const request = await axios.get(`${baseURL}/${user}`);

    const response = await request;
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getRepo = async (user) => {
  try {
    const request = await axios.get(`${baseURL}/${user}/repos`);
    const response = await request;
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export { getUser, getRepo };
