import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const useUser = () => {
  const { data, setData, user, setUser, repo, setRepo } =
    useContext(UserContext);

  return { data, setData, user, setUser, repo, setRepo };
};

export { useUser };
