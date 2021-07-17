import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import { Repositories } from "../../components/RepositoriesList";
import { UserInfos } from "../../components/UserData";
import { useUser } from "../../hooks/useUser";

import * as S from "./style";

const Profile = () => {
  const { data, repo } = useUser();

  const {
    avatar_url,
    name,
    login,
    location,
    company,
    followers,
    following,
    public_repos,
  } = data;

  return (
    <>
      <Header />

      <Helmet title={`${name} | Profile`} />
      <UserInfos
        src={avatar_url}
        name={name}
        account={login}
        location={location}
        company={company}
        followers={followers}
        following={following}
        repos={public_repos}
      />

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
              <Repositories
                key={id}
                title={name}
                description={description}
                star={stargazers_count}
                forks={forks}
                language={language}
                href={git_url}
              />
            );
          }
        )}
      </S.ContainerRepository>
    </>
  );
};

export { Profile };
