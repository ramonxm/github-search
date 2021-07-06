import React from "react";
import * as S from "./style";

const Home = () => {
  return (
    <S.ContainerHome>
      <img src="/assets/svg/logo-vertical.svg" alt="Logo" />
      <S.Search>
        <S.InputSearch />
        <S.SubmitButton>
          Search
          <S.Icon />
        </S.SubmitButton>
      </S.Search>
    </S.ContainerHome>
  );
};

export default Home;
