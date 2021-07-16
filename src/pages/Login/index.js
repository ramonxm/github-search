import { useCallback } from "react";
import { useHistory } from "react-router";
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
      history.push("/profile");
    },
    // eslint-disable-next-line
    [user]
  );

  const handleGetRepo = useCallback(
    async (user) => {
      const response = await getRepo(user);
      setRepo(response);
      localStorage.setItem("repo", JSON.stringify(response));
    },
    // eslint-disable-next-line
    [user]
  );

  return (
    <S.ContainerLogin>
      <S.LogoImg src="/assets/svg/logo-vertical.svg" alt="Logo" />
      <S.ContainerSearch>
        <S.InputSearch
          type="text"
          placeholder="Enter your user name"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <S.SubmitButton
          type="submit"
          onClick={() => {
            handleGetRepo(user);
            handleLoginUser(user);
          }}
        >
          Search
        </S.SubmitButton>
      </S.ContainerSearch>
    </S.ContainerLogin>
  );
};

export default Login;
