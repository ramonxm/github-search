import React from "react";
import { Link, useHistory } from "react-router-dom";

import * as S from "./style";

const Profile = () => {
  const history = useHistory();

  const backToLogin = () => {
    history.goBack();
  };

  document.title = "Profile";
  return (
    <>
      <S.ContainerHeader>
        <Link to="/profile">
          <S.NavigationImg
            src="/assets/svg/logo-horizontal.svg"
            alt="Github Search"
          />
        </Link>
        <Link onClick={backToLogin}>
          <S.NavigationImg src="/assets/images/row.png" alt="Github Search" />
        </Link>
      </S.ContainerHeader>

      <S.ContainerUserProfile>
        <S.UserImg
          alt="profile"
          src="https://avatars.githubusercontent.com/u/38158476?v=4"
        />
        <S.ContentUserInfo>
          <S.UserName>Ramon Xavier</S.UserName>
          <S.UserAccount>@ramonxm</S.UserAccount>
          <S.ContainerInfos>
            <S.UserInfos>
              <S.ImgInfos src="/assets/svg/location.svg" alt="Localização" />
              Localização
            </S.UserInfos>
            <S.UserInfos>
              <S.ImgInfos src="/assets/svg/work.svg" alt="Trabalho" />
              StormGroup
            </S.UserInfos>
            <S.UserInfos>
              <S.ImgInfos src="/assets/svg/peoples.svg" alt="Followers" />
              4700
            </S.UserInfos>
            <S.UserInfos>
              <S.ImgInfos src="/assets/svg/peoples-none.svg" alt="Following" />
              3100
            </S.UserInfos>
            <S.UserInfos>
              <S.ImgInfos src="/assets/svg/star.svg" alt="Star(s)" />
              30
            </S.UserInfos>
          </S.ContainerInfos>
        </S.ContentUserInfo>
        <S.ContainerTotalRepositories>
          <S.TitleTotalRepositories>
            Total Repositories
          </S.TitleTotalRepositories>
          <S.ContentTotalRepositories>
            <S.IconRepositories src="/assets/svg/repo.svg" alt="Repositories" />
            <S.TotalRepositories>29</S.TotalRepositories>
          </S.ContentTotalRepositories>
        </S.ContainerTotalRepositories>
      </S.ContainerUserProfile>
    </>
  );
};

export default Profile;
