import styled from "styled-components";

const ContainerRepositoriesInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #201f1f;
  width: 100%;
  max-width: 300px;
  padding: 14px;
  margin: 0 auto;
`;

const TitleRepository = styled.span`
  font-size: 18px;
  color: #e5e5e5;
  padding-bottom: 8px;
`;

const ContainerInfos = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 300px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 650px) {
    justify-content: center;
  }
`;

const ContentRepository = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DescriptionRepository = styled.p`
  font-size: 14px;
  color: #e5e5e5;
`;

const UserInfos = styled.span`
  display: flex;
  gap: 10px;
  color: #e5e5e5;
`;

const ImgInfos = styled.img`
  width: 20px;
  height: 20px;
`;

export {
  ContainerInfos,
  ContentRepository,
  ContainerRepositoriesInfos,
  DescriptionRepository,
  UserInfos,
  ImgInfos,
  TitleRepository,
};
