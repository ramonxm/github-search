import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const useUser = () => {
  return { ...useContext(UserContext) };
};

export { useUser };
