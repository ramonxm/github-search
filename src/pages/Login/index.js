import { Helmet } from "react-helmet";
import { Search } from "../../components/FormSearch";

import { useUser } from "../../hooks/useUser";
import * as S from "./style";

const Login = () => {
  const { user, setUser, setValues } = useUser();

  const handleSubmit = (e) => {
    setValues(user);

    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <S.ContainerLogin>
      <Helmet title="Login | GithubSearch" />
      <S.LogoImg src="/assets/svg/logo-vertical.svg" alt="Logo" />
      <Search
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        value={user}
      />
    </S.ContainerLogin>
  );
};

export { Login };
