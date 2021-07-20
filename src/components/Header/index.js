import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import * as S from "./style";
const Header = () => {
  const { setValues } = useUser();

  const handleDeslogged = () => {
    setValues(false);
    localStorage.removeItem("users");
    localStorage.removeItem("repo");
  };
  return (
    <S.ContainerHeader>
      <Link to="/profile">
        <S.NavigationImg
          src="/assets/svg/logo-horizontal.svg"
          alt="Github Search"
        />
      </Link>
      <Link to="/" onClick={handleDeslogged}>
        <S.NavigationImg src="/assets/images/row.png" alt="Github Search" />
      </Link>
    </S.ContainerHeader>
  );
};
export { Header };
