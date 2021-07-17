import { useHistory } from "react-router";
import { Button } from "../Button/style";
import * as S from "./style";

const NotFound = () => {
  const { push } = useHistory();

  return (
    <>
      <S.ContainerNotFound>
        <S.TitleNotFound>Ooops.. 404!</S.TitleNotFound>
        <img src="/assets/images/not-found.png" alt="error" />
        <S.DescriptionNotFound>
          Parece que algo de errado aconteceu! Volte para a tela inicial e tente
          novamente
        </S.DescriptionNotFound>
        <Button onClick={() => push("/")}>Voltar para login!</Button>
      </S.ContainerNotFound>
    </>
  );
};

export { NotFound };
