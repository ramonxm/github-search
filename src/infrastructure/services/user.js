import { api } from "./base";

const getUser = async (user) => {
  try {
    const request = await api.get(`/${user}`);
    const response = await request;
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getRepo = async (user) => {
  try {
    const request = await api.get(`/${user}/repos`);
    const response = await request;
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getUser, getRepo };
