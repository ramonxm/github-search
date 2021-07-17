import { Link } from "react-router-dom";
import * as S from "./style";
const Header = () => {
  return (
    <S.ContainerHeader>
      <Link to="/profile">
        <S.NavigationImg
          src="/assets/svg/logo-horizontal.svg"
          alt="Github Search"
        />
      </Link>
      <Link to="/">
        <S.NavigationImg src="/assets/images/row.png" alt="Github Search" />
      </Link>
    </S.ContainerHeader>
  );
};
export { Header };
