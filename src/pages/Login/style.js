import styled from "styled-components";

const ContainerLogin = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const LogoImg = styled.img`
  max-width: 197px;
`;

const ContainerSearch = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputSearch = styled.input`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 400;
  color: #535353;

  border: none;
  border-bottom: 4px solid #8752cc;
  background: none;
  outline: none;

  padding: 5px;
  margin: 20px 0;
`;

export { ContainerLogin, ContainerSearch, InputSearch, LogoImg };
