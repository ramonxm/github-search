import * as S from "./style";
const Button = ({ children, onClick }) => {
  return <S.Button onClick={onClick}> {children}</S.Button>;
};

export { Button };
