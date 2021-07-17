import * as S from "./style";
const Repositories = ({
  id,
  href,
  title,
  description,
  star,
  forks,
  language,
}) => {
  return (
    <S.ContainerRepositoriesInfos key={id}>
      <S.TitleRepository>{title}</S.TitleRepository>
      <S.ContentRepository>
        <S.DescriptionRepository>{description}</S.DescriptionRepository>
        <S.ContainerInfos>
          <S.UserInfos>
            <S.ImgInfos src="/assets/svg/star.svg" alt="Star(s)" />
            {star}
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
            <a href={href}>
              <S.ImgInfos src="/assets/svg/link.svg" alt="Search" />
            </a>
          </S.UserInfos>
        </S.ContainerInfos>
      </S.ContentRepository>
    </S.ContainerRepositoriesInfos>
  );
};

export { Repositories };
