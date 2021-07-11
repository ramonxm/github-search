import React from "react";
import { useHistory } from "react-router";
import * as S from "./style";

const Login = () => {
  const history = useHistory();

  const handleLoginUser = () => {
    history.push("/profile");
  };
  return (
    <S.ContainerLogin>
      <S.LogoImg src="/assets/svg/logo-vertical.svg" alt="Logo" />
      <S.ContainerSearch>
        <S.InputSearch placeholder="Enter user name" />
        <S.SubmitButton onClick={handleLoginUser}>Search</S.SubmitButton>
      </S.ContainerSearch>
    </S.ContainerLogin>
  );
};

export default Login;
