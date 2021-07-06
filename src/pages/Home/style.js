import styled from "styled-components";

const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #232324;
  height: 100vh;
`;

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px;
  height: 250px;
`;

const InputSearch = styled.input`
  background: none;
  border: none;
  color: #535353;
  text-align: center;
  border-bottom: 4px solid #8752cc;
  padding: 12px;
  font-weight: 400;
  font-size: 1.125rem;
  outline: none;
  margin-bottom: 24px;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  margin-top: 47px;
  background: #8752cc;
  padding: 12px;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  outline: none;

  &:focus {
    transform: scale(0.95);
  }
`;

const Icon = styled.img`
  font-size: 1.25rem;
`;

export { ContainerHome, Search, InputSearch, Icon, SubmitButton };
