import React from "react";
import * as S from "./style";

const Login = () => {
  return (
    <S.ContainerLogin>
      <S.LogoImg src="/assets/svg/logo-vertical.svg" alt="Logo" />
      <S.ContainerSearch>
        <S.InputSearch />
        <S.SubmitButton>Search</S.SubmitButton>
      </S.ContainerSearch>
    </S.ContainerLogin>
  );
};

export default Login;
