import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  max-width: 300px;
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 auto;
  color: #fff;
  background: #8752cc;

  padding: 12px;
  border-radius: 12px;

  cursor: pointer;
  border: none;
  outline: none;

  &:focus {
    transform: scale(0.95);
  }
`;

export { Button };
