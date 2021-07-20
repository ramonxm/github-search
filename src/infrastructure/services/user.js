import { api } from "./base";

const getUser = async (user) => {
  const request = await api.get(`/${user}`);
  const response = await request;
  return response;
};

const getRepo = async (user) => {
  const request = await api.get(`/${user}/repos`);
  const response = await request;
  return response;
};

export { getUser, getRepo };
