import styled from "styled-components";

const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavigationImg = styled.img``;

const ContainerUserProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const ContentUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h2`
  color: #8752cc;
  @media (max-width: 650px) {
    text-align: center;
  }
`;

const UserAccount = styled.span`
  color: #e5e5e5;

  @media (max-width: 650px) {
    text-align: center;
  }
`;

const ContainerInfos = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 10px;
  width: 300px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 650px) {
    justify-content: center;
  }
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

const ContainerTotalRepositories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90px;
  width: 160px;
  padding: 12px;
  background: #201f1f;
`;

const TitleTotalRepositories = styled.span`
  font-size: 16px;
  color: #e5e5e5;
`;

const ContentTotalRepositories = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70px;
`;

const IconRepositories = styled.img``;

const TotalRepositories = styled.p`
  font-size: 24px;
  color: #e5e5e5;
`;

export {
  ContainerHeader,
  NavigationImg,
  ContainerUserProfile,
  UserImg,
  ContentUserInfo,
  UserName,
  UserAccount,
  ContainerInfos,
  UserInfos,
  ImgInfos,
  ContainerTotalRepositories,
  TitleTotalRepositories,
  ContentTotalRepositories,
  IconRepositories,
  TotalRepositories,
};
