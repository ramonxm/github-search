import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "../../components/Header";
import { Repositories } from "../../components/RepositoriesList";
import { UserInfos } from "../../components/UserData";
import { useUser } from "../../hooks/useUser";

import * as S from "./style";

const Profile = () => {
  const { data, repo } = useUser();

  return (
    <>
      <Header />

      <Helmet title={`${data?.name} | Profile`} />

      <UserInfos
        src={data?.avatar_url}
        name={data?.name}
        account={data?.login}
        location={data?.location}
        company={data?.company}
        followers={data?.followers}
        following={data?.following}
        repos={data?.public_repos}
      />

      <S.ContainerRepository>
        {repo?.map(
          ({
            name,
            description,
            language,
            stargazers_count,
            forks,
            html_url,
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
                href={html_url}
              />
            );
          }
        )}
      </S.ContainerRepository>
    </>
  );
};

export { Profile };
