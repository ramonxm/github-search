import { createContext, useCallback, useState, useEffect } from "react";
import { getUser, getRepo } from "../infrastructure/services/user";
import { useHistory } from "react-router";
import toast, { Toaster } from "react-hot-toast";

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

  const [values, setValues] = useState(null);

  const hasUser = !!values;
  const { push } = useHistory();

  const handleLoginUser = useCallback(async (user, handleGetRepo) => {
    try {
      const response = await getUser(user);
      const { data } = await response;
      localStorage.setItem("users", JSON.stringify(data));
      setData(data);
      await handleGetRepo(user);
      toast.success("Logando...");
      return data;
    } catch (error) {
      localStorage.removeItem("users");
      setUser("");
      toast.error("Usuário não encontrado!");
    }
  }, []);

  const handleGetRepo = useCallback(async (user) => {
    try {
      const response = await getRepo(user);
      const { data } = await response;
      setRepo(data);
      localStorage.setItem("repo", JSON.stringify(data));
      push("/profile");
      return data;
    } catch (error) {
      localStorage.removeItem("repo");
      setUser("");
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (hasUser) {
      handleLoginUser(user, handleGetRepo);
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
      <Toaster />
    </>
  );
};

export { UserContext, UserContextProvider };
