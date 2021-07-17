import styled from "styled-components";

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

export { ContainerSearch, InputSearch };
