import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

import * as S from "./style";

const Profile = () => {
  const history = useHistory();
  const { data, repo } = useUser();

  const backToLogin = () => {
    history.goBack();
  };

  console.log(data);

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
        <S.UserImg alt="profile" src={data.avatar_url} />
        <S.ContentUserInfo>
          <S.UserName>{data.name}</S.UserName>
          <S.UserAccount>@{data.login}</S.UserAccount>
          <S.ContainerInfos>
            <S.UserInfos>
              <S.ImgInfos src="/assets/svg/location.svg" alt="Localização" />
              {data.location}
            </S.UserInfos>
            <S.UserInfos>
              <S.ImgInfos src="/assets/svg/work.svg" alt="Trabalho" />
              {data.company}
            </S.UserInfos>
            <S.UserInfos>
              <S.ImgInfos src="/assets/svg/peoples.svg" alt="Followers" />
              {data.followers}
            </S.UserInfos>
            <S.UserInfos>
              <S.ImgInfos src="/assets/svg/peoples-none.svg" alt="Following" />
              {data.following}
            </S.UserInfos>
          </S.ContainerInfos>
        </S.ContentUserInfo>
        <S.ContainerTotalRepositories>
          <S.TitleTotalRepositories>
            Total Repositories
          </S.TitleTotalRepositories>
          <S.ContentTotalRepositories>
            <S.IconRepositories src="/assets/svg/repo.svg" alt="Repositories" />
            <S.TotalRepositories>{data.public_repos}</S.TotalRepositories>
          </S.ContentTotalRepositories>
        </S.ContainerTotalRepositories>
      </S.ContainerUserProfile>
      <S.ContainerRepository>
        {repo.map(
          ({
            name,
            description,
            language,
            stargazers_count,
            forks,
            git_url,
            id,
          }) => {
            return (
              <S.ContainerRepositoriesInfos key={id}>
                <S.TitleRepository>{name}</S.TitleRepository>
                <S.ContentRepository>
                  <S.DescriptionRepository>
                    {description}
                  </S.DescriptionRepository>
                  <S.ContainerInfos>
                    <S.UserInfos>
                      <S.ImgInfos src="/assets/svg/star.svg" alt="Star(s)" />
                      {stargazers_count}
                    </S.UserInfos>
                    <S.UserInfos>
                      <S.ImgInfos src="/assets/svg/fork.svg" alt="Fork" />
                      {forks}
                    </S.UserInfos>
                    <S.UserInfos>
                      <S.ImgInfos src="/assets/svg/tech.svg" alt="Tech" />
                      {language}
                    </S.UserInfos>
                    <S.UserInfos>
                      <a href={git_url}>
                        <S.ImgInfos src="/assets/svg/link.svg" alt="Search" />
                      </a>
                    </S.UserInfos>
                  </S.ContainerInfos>
                </S.ContentRepository>
              </S.ContainerRepositoriesInfos>
            );
          }
        )}
      </S.ContainerRepository>
    </>
  );
};

export default Profile;
