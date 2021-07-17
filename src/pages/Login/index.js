import { useCallback } from "react";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";
import { Search } from "../../components/FormSearch";
import { useUser } from "../../hooks/useUser";
import { getRepo, getUser } from "../../infrastructure/services/user";
import * as S from "./style";

const Login = () => {
  const history = useHistory();
  const { setData, user, setUser, setRepo } = useUser();

  const handleLoginUser = useCallback(
    async (user) => {
      const response = await getUser(user);
      setData(response);
      localStorage.setItem("users", JSON.stringify(response));
      return response;
    },

    // eslint-disable-next-line
    [user]
  );

  const handleGetRepo = useCallback(
    async (user) => {
      const response = await getRepo(user);
      setRepo(response);
      localStorage.setItem("repo", JSON.stringify(response));
      return response;
    },
    // eslint-disable-next-line
    [user]
  );

  const handleSubmit = () => {
    const secondsToLogin = 1000;
    setTimeout(() => {
      handleGetRepo(user);
      handleLoginUser(user);
      history.push("/profile");
    }, secondsToLogin);
  };

  return (
    <S.ContainerLogin>
      <Helmet title="Login | GithubSearch" />
      <S.LogoImg src="/assets/svg/logo-vertical.svg" alt="Logo" />
      <Search
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Logando...");
          handleSubmit();
        }}
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      <Toaster />
    </S.ContainerLogin>
  );
};

export { Login };
