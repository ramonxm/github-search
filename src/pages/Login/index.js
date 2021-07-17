import { useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";
import { Button } from "../../components/Button/style";
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
      <S.LogoImg src="/assets/svg/logo-vertical.svg" alt="Logo" />
      <S.ContainerSearch
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Logando..");
          handleSubmit();
        }}
      >
        <S.InputSearch
          type="text"
          placeholder="Enter your user name"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <Button type="submit">Search</Button>
      </S.ContainerSearch>
      <Toaster />
    </S.ContainerLogin>
  );
};

export { Login };
