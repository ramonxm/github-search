import { createContext, useCallback, useState, useEffect } from "react";
import { getUser, getRepo } from "../infrastructure/services/user";

const UserContext = createContext({});
const { Provider } = UserContext;

const UserContextProvider = ({ children }) => {
  const [data, setData] = useState(
    [] && (JSON.parse(localStorage.getItem("users")) || [])
  );
  const [repo, setRepo] = useState(
    [] && (JSON.parse(localStorage.getItem("repo")) || [])
  );
  const [user, setUser] = useState("");
  const [values, setValues] = useState(undefined);

  const hasUser = !!values;

  const handleLoginUser = useCallback(async (user) => {
    const response = await getUser(user);
    setData(response);
    localStorage.setItem("users", JSON.stringify(response));
    return response;
  }, []);

  const handleGetRepo = useCallback(async (user) => {
    const response = await getRepo(user);
    setRepo(response);
    localStorage.setItem("repo", JSON.stringify(response));
    return response;
  }, []);

  useEffect(() => {
    if (hasUser) {
      handleLoginUser(user);
      handleGetRepo(user);
    }
    //eslint-disable-next-line
  }, [hasUser]);

  return (
    <>
      <Provider
        value={{ data, setData, user, setUser, repo, setRepo, setValues }}
      >
        {children}
      </Provider>
    </>
  );
};

export { UserContext, UserContextProvider };
