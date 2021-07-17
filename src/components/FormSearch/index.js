import { Button } from "../Button/style";
import * as S from "./style";
const Search = ({ onSubmit, onChange, value }) => {
  return (
    <S.ContainerSearch onSubmit={onSubmit}>
      <S.InputSearch
        type="text"
        placeholder="Enter your user name"
        minLength={1}
        onChange={onChange}
        value={value}
        required
      />
      <Button type="submit">Search</Button>
    </S.ContainerSearch>
  );
};

export { Search };
