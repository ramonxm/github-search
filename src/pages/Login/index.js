import React from "react";
import { useHistory } from "react-router";
import * as S from "./style";

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/profile");
  };

  return (
    <S.ContainerLogin>
      <S.LogoImg src="/assets/svg/logo-vertical.svg" alt="Logo" />
      <S.ContainerSearch>
        <S.InputSearch type="text" placeholder="Enter your user name" />
        <S.SubmitButton type="submit" onClick={handleLogin}>
          Search
        </S.SubmitButton>
      </S.ContainerSearch>
    </S.ContainerLogin>
  );
};

export default Login;
