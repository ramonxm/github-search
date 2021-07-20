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

  const [values, setValues] = useState(false);

  const hasUser = !!values;
  const handleLoginUser = useCallback(async (user) => {
    try {
      const response = await getUser(user);
      const { data } = response;
      setData(data);
      localStorage.setItem("users", JSON.stringify(data));
      return data;
    } catch (error) {
      localStorage.removeItem("users");
    }
  }, []);

  const handleGetRepo = useCallback(async (user) => {
    try {
      const response = await getRepo(user);
      const { data } = response;
      setRepo(data);
      localStorage.setItem("repo", JSON.stringify(data));
      return data;
    } catch (error) {
      localStorage.removeItem("repo");
      return;
    }
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
        value={{
          data,
          setData,
          user,
          setUser,
          repo,
          setRepo,
          values,
          setValues,
        }}
      >
        {children}
      </Provider>
    </>
  );
};

export { UserContext, UserContextProvider };
