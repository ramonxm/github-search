import * as S from "./style";
const UserInfos = ({
  src,
  name,
  account,
  location,
  company,
  followers,
  following,
  repos,
}) => {
  return (
    <S.ContainerUserProfile>
      <S.UserImg alt="profile" src={src} />
      <S.ContentUserInfo>
        <S.UserName>{name}</S.UserName>
        <S.UserAccount>@{account}</S.UserAccount>
        <S.ContainerInfos>
          <S.UserInfos>
            <S.ImgInfos src="/assets/svg/location.svg" alt="Localização" />
            {location}
          </S.UserInfos>
          <S.UserInfos>
            <S.ImgInfos src="/assets/svg/work.svg" alt="Trabalho" />
            {company}
          </S.UserInfos>
          <S.UserInfos>
            <S.ImgInfos src="/assets/svg/peoples.svg" alt="Followers" />
            {followers}
          </S.UserInfos>
          <S.UserInfos>
            <S.ImgInfos src="/assets/svg/peoples-none.svg" alt="Following" />
            {following}
          </S.UserInfos>
        </S.ContainerInfos>
      </S.ContentUserInfo>
      <S.ContainerTotalRepositories>
        <S.TitleTotalRepositories>Total Repositories</S.TitleTotalRepositories>
        <S.ContentTotalRepositories>
          <S.IconRepositories src="/assets/svg/repo.svg" alt="Repositories" />
          <S.TotalRepositories>{repos}</S.TotalRepositories>
        </S.ContentTotalRepositories>
      </S.ContainerTotalRepositories>
    </S.ContainerUserProfile>
  );
};

export { UserInfos };
