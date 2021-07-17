import styled from "styled-components";

const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100vh;
  max-width: 900px;
  margin: 0 auto;
`;

const TitleNotFound = styled.h1`
  font-size: 36px;
  color: #8752cc;
  font-weight: 700;
`;

const DescriptionNotFound = styled.p`
  font-size: 18px;
  color: #fff;
  font-weight: 500;
`;

export { ContainerNotFound, TitleNotFound, DescriptionNotFound };
